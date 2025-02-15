USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spSendCoins]    Script Date: 28.08.2021 16:55:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spSendCoins]
@senderUserId nvarchar(450),
@receiverUserId nvarchar(450),
@typeSend int,
@typeRecieve int,

@Comment nvarchar(450),
@currencyAcronim nvarchar(10),
@value decimal(38,20),

@senderWalletId int,
@receiverWalletId int,
@hash varchar(66)
AS
BEGIN

UPDATE Wallets
SET Value -= @value, LastUpdate = GETDATE()
WHERE ID = @senderWalletId

UPDATE Wallets
SET Value += @value, LastUpdate = GETDATE()
WHERE Id = @receiverWalletId

insert into Transfers (WalletFromId, WalletToId, Value, Date, CurrencyAcronim, Hash, Comment)
values (@senderWalletId, @receiverWalletId, @value, GETDATE(), @currencyAcronim, @hash, @Comment)

insert into Events (UserId, Type, Value, Comment, WhenDate, CurrencyAcronim)
values (@senderUserId, @typeSend, @value, @Comment, GETDATE(), @currencyAcronim)

insert into Events (UserId, Type, Value, Comment, WhenDate, CurrencyAcronim)
values (@receiverUserId, @typeRecieve, @value, @Comment, GETDATE(), @currencyAcronim)

END

