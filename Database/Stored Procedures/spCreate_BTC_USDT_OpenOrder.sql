ALTER PROCEDURE [dbo].[spCreate_BTC_USDT_OpenOrder]
@userid nvarchar(450),
@isBuy bit,
@price decimal(38,20),
@amount decimal(38,20),
@total decimal(38,20),
@new_identity bigint OUTPUT
AS
BEGIN

insert into BTC_USDT_OpenOrders (IsBuy, Price, Amount, Total, CreateUserId)
values (@isBuy, @price, @amount, @total, @userid)

SELECT @new_identity = SCOPE_IDENTITY()

SELECT @new_identity

END
