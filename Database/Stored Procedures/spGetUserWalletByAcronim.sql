USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spGetUserWalletByAcronim]    Script Date: 25.08.2021 19:23:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spGetUserWalletByAcronim]
@userId nvarchar(450),
@acronim nvarchar(450)
AS
BEGIN

--declare @acronim nvarchar(10)
--set @acronim = 'GPS'

SELECT w.[Id]
      ,w.[UserId]
      ,w.[Value]
      ,w.CurrencyAcronim
	  ,w.[Created]
	  ,w.[LastUpdate]
	  ,w.[Address]
  FROM [Wallets] w
  where w.[UserId] = @userid AND w.CurrencyAcronim = @acronim

END
