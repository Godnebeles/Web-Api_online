USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spGetLastIncomeTransactionsByUserId]    Script Date: 16.08.2021 20:11:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spGetLastIncomeTransactionsByUserId]
@userid nvarchar(450)
AS
BEGIN

Select transactions.* From IncomeTransactions transactions
	Inner join ( SELECT transactionGroup.CurrencyAcronim, max(transactionGroup.Id) LastId
				 FROM IncomeTransactions transactionGroup
				 WHERE transactionGroup.UserId = @userid
				 GROUP BY transactionGroup.CurrencyAcronim)
	transactionMaxIdByAcronim
	On transactions.Id = transactionMaxIdByAcronim.LastId
	
END






