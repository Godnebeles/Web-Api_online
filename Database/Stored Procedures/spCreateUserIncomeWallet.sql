USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spCreateUserIncomeWallet]    Script Date: 16.08.2021 22:02:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spCreateUserIncomeWallet]
@userid nvarchar(450),
@address nvarchar(max),
@addressLabel nvarchar(max),
@currencyAcronim nvarchar(10),
@new_identity    INT    OUTPUT
AS
BEGIN

INSERT INTO IncomeWallets (UserId, Address, AddressLabel, CurrencyAcronim)
VALUES (@userid, @address, @addressLabel, @currencyAcronim)

SELECT @new_identity = SCOPE_IDENTITY()

SELECT @new_identity AS id

--Создаём внутренний кошелёк, если его не было
--insert wallet if not exist
If Not Exists(SELECT 1 FROM Wallets WHERE UserId = @userid AND CurrencyAcronim = @currencyAcronim)
Begin
INSERT INTO Wallets (UserId, CurrencyAcronim, Value)
VALUES (@userid, @currencyAcronim, 0)
End

RETURN

END
