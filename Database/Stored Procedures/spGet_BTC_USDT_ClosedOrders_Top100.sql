USE [Exchange]
GO
/****** Object:  StoredProcedure [dbo].[spGet_BTC_USDT_ClosedOrders]    Script Date: 14.08.2021 0:34:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[spGet_BTC_USDT_ClosedOrders_Top100]
AS
BEGIN

select top 100 buco.*
from   [BTC_USDT_ClosedOrders] buco
order by buco.ClosedDate desc

END
