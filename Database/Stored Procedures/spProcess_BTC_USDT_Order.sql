USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spProcess_BTC_USDT_Order]    Script Date: 06.09.2021 16:39:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spProcess_BTC_USDT_Order]
@createUserId nvarchar(450),
@isBuy bit,
@price decimal(38,20),
@amount decimal(38,20),
@total decimal(38,20),
@openOrderId bigint,
@createDate datetime
AS
BEGIN

SELECT TOP 1 *
INTO   #selectedOrder
FROM   BTC_USDT_OpenOrders
WHERE  IsBuy != @isBuy AND 
	   (( IsBuy = 1 AND @price <= Price ) OR 
	   ( IsBuy = 0 AND @price >= Price ))
ORDER  BY Price,
          CreateDate

DECLARE @selectOrderAmount DECIMAL(38, 20);
SET @selectOrderAmount = 
	(SELECT Amount FROM #selectedOrder) 

DECLARE @selectedOrderAmountLocal DECIMAL(38, 20);
SET @selectedOrderAmountLocal = 0;

DECLARE @amountLocal DECIMAL(38, 20);
SET @amountLocal = 0;

IF NOT EXISTS(SELECT * FROM #selectedOrder)
BEGIN	
	SELECT 0;
END
ELSE IF (@amount > @selectOrderAmount)
BEGIN
	SET @amountLocal = @amount - @selectOrderAmount;
	
	DELETE FROM BTC_USDT_OpenOrders
	WHERE  OpenOrderId = 
		(SELECT OpenOrderId FROM #selectedOrder) 

	INSERT INTO BTC_USDT_ClosedOrders (	
				ClosedOrderId, Total, CreateDate,
				ClosedDate, IsBuy, ExposedPrice, TotalPrice, Difference, Amount,
				CreateUserId, BoughtUserId, Status)

		VALUES ((SELECT OpenOrderId FROM #selectedOrder),
				(SELECT Total FROM #selectedOrder),
				(SELECT CreateDate FROM #selectedOrder),
				 getdate(),
				(SELECT IsBuy FROM #selectedOrder),
				(SELECT Price FROM #selectedOrder),
				@price,
				((SELECT Price FROM #selectedOrder) - @price),
				(SELECT Amount FROM #selectedOrder),
				(SELECT CreateUserId FROM #selectedOrder),
				@createUserId, 
				1)
	
	IF ((SELECT IsBuy FROM #selectedOrder) = 1)
	BEGIN
		UPDATE Wallets 
		SET Value = Value + (SELECT Amount FROM #selectedOrder)
		WHERE UserId = (SELECT CreateUserId FROM #selectedOrder) 
			AND CurrencyAcronim = 'BTC'  			
	END
	ELSE
	BEGIN
		UPDATE Wallets 
		SET Value = Value + (SELECT Total FROM #selectedOrder)
		WHERE UserId = (SELECT CreateUserId FROM #selectedOrder) 
			AND CurrencyAcronim = 'USDT' 
	END
 
	UPDATE [BTC_USDT_OpenOrders]
	SET    IsBuy = @isBuy,
		   Price = @price,
		   Amount = @amountLocal,
		   CreateUserId = @createUserId
	WHERE  OpenOrderId = @openOrderId 	
	
	SELECT @amountLocal
END
ELSE IF (@amount < @selectOrderAmount)
BEGIN
	SET @selectedOrderAmountLocal = @selectOrderAmount - @amount;
	
	DELETE FROM BTC_USDT_OpenOrders
	WHERE  OpenOrderId = @openOrderId
	
	INSERT INTO BTC_USDT_ClosedOrders (
				ClosedOrderId, Total, CreateDate,
				ClosedDate, IsBuy, ExposedPrice, TotalPrice, Difference, Amount,
				CreateUserId, BoughtUserId, Status)

		VALUES (@openOrderId,
				@total,
				@createDate,
				getdate(),
				@isBuy,
				@price,
				(SELECT Price FROM #selectedOrder),
				(@price - (SELECT Price FROM #selectedOrder)),
				@amount,
				@createUserId,
				(SELECT CreateUserId FROM #selectedOrder), 
				1)
				
	IF (@isBuy = 1)
	BEGIN
		UPDATE Wallets 
		SET Value = Value + @amount
		WHERE UserId = @createUserId 
			AND CurrencyAcronim = 'BTC'  			
	END
	ELSE
	BEGIN
		UPDATE Wallets 
		SET Value = Value + @total
		WHERE UserId = @createUserId 
			AND CurrencyAcronim = 'USDT' 
	END
	
	UPDATE [BTC_USDT_OpenOrders]
	SET    IsBuy = (SELECT IsBuy FROM #selectedOrder),
		   Price = (SELECT Price FROM #selectedOrder),
		   Amount = @selectedOrderAmountLocal,
		   CreateUserId = (SELECT CreateUserId FROM #selectedOrder)
	WHERE  OpenOrderId = (SELECT OpenOrderId FROM #selectedOrder)

	SELECT 0
END
ELSE IF (@amount = @selectOrderAmount)
BEGIN

	DELETE FROM BTC_USDT_OpenOrders
	WHERE  OpenOrderId = 
		(SELECT OpenOrderId FROM #selectedOrder) 
		
	DELETE FROM BTC_USDT_OpenOrders
	WHERE  OpenOrderId = @openOrderId

	INSERT INTO BTC_USDT_ClosedOrders (
				ClosedOrderId, Total, CreateDate,
				ClosedDate, IsBuy, ExposedPrice, TotalPrice, Difference, Amount,
				CreateUserId, BoughtUserId, Status)
		VALUES ((SELECT OpenOrderId FROM #selectedOrder),
				(SELECT Total FROM #selectedOrder),
				(SELECT CreateDate FROM #selectedOrder),
				 getdate(),
				(SELECT IsBuy FROM #selectedOrder),
				(SELECT Price FROM #selectedOrder),
				@price,
				((SELECT Price FROM #selectedOrder) - @price),
				(SELECT Amount FROM #selectedOrder),
				(SELECT CreateUserId FROM #selectedOrder),
				@createUserId, 
				1)

	IF ((SELECT IsBuy FROM #selectedOrder) = 1)
	BEGIN
		UPDATE Wallets 
		SET Value = Value + (SELECT Amount FROM #selectedOrder)
		WHERE UserId = (SELECT CreateUserId FROM #selectedOrder) 
			AND CurrencyAcronim = 'BTC'  			
	END
	ELSE
	BEGIN
		UPDATE Wallets 
		SET Value = Value + (SELECT Total FROM #selectedOrder)
		WHERE UserId = (SELECT CreateUserId FROM #selectedOrder) 
			AND CurrencyAcronim = 'USDT' 
	END

	INSERT INTO BTC_USDT_ClosedOrders (
				ClosedOrderId, Total, CreateDate,
				ClosedDate, IsBuy, ExposedPrice, TotalPrice, Difference, Amount,
				CreateUserId, BoughtUserId, Status)

		VALUES (@openOrderId,
				@total,
				@createDate,
				getdate(),
				@isBuy,
				@price,
				(SELECT Price FROM #selectedOrder),
				(@price - (SELECT Price FROM #selectedOrder)),
				@amount,
				@createUserId,
				(SELECT CreateUserId FROM #selectedOrder), 
				1)
				
	IF (@isBuy = 1)
	BEGIN
		UPDATE Wallets 
		SET Value = Value + @amount
		WHERE UserId = @createUserId 
			AND CurrencyAcronim = 'BTC'  			
	END
	ELSE
	BEGIN
		UPDATE Wallets 
		SET Value = Value + @total
		WHERE UserId = @createUserId 
			AND CurrencyAcronim = 'USDT' 
	END

	SELECT 0
END
DROP TABLE #selectedOrder

END