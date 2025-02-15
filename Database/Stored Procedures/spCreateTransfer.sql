USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spCreateTransfer]    Script Date: 26.08.2021 23:42:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spCreateTransfer]
@walletFromId int,
@walletToId int,
@value decimal(38,20),
@currencyAcronim nvarchar(10),
@hash varchar(66),
@new_identity    INT    OUTPUT
AS
BEGIN

INSERT INTO Transfers(WalletFromId, WalletToId, Value,
Date, CurrencyAcronim, Hash)
VALUES (@walletFromId, @walletToId, @value, GETDATE(),
@currencyAcronim, @hash)

SELECT @new_identity = SCOPE_IDENTITY()

SELECT @new_identity AS id

RETURN

END
