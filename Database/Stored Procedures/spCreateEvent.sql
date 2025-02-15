USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spAddEvent]    Script Date: 02.09.2021 13:49:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spCreateEvent]
@userid nvarchar(450),
@type int,
@value decimal(38,20),
@comment nvarchar(450),
@whenDate datetime,
@currencyAcronim nvarchar(450)
AS
BEGIN

insert into Events (UserId, Type, Value, Comment, WhenDate, CurrencyAcronim)
values (@userid, @type, @value, @comment, @whenDate, @currencyAcronim)

END

