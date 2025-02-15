﻿using System.Collections.Generic;
using Web_Api.online.Clients.Interfaces;
using Web_Api.online.Services.Interfaces;

namespace Web_Api.online.Services
{
    public class CoinManager : ICoinManager
    {
        private List<ICoinService> coinServices;
        private IBitcoinCashService bitcoinCash;
        private IBitcoinService bitcoin;
        private IDashService dash;
        private IDogecoinService dogecoin;
        private ILitecoinService litecoin;

        public List<ICoinService> CoinServices => coinServices;

        public IBitcoinCashService BitcoinCash => bitcoinCash;

        public IBitcoinService Bitcoin => bitcoin;

        public IDashService Dash => dash;

        public IDogecoinService Dogecoin => dogecoin;

        public ILitecoinService Litecoin => litecoin;

        public CoinManager(IBitcoinCashService bitcoinCash,
            IBitcoinService bitcoin,
            IDashService dash,
            IDogecoinService dogecoin,
            ILitecoinService litecoin)
        {
            this.bitcoinCash = bitcoinCash;
            this.bitcoin = bitcoin;
            this.dash = dash;
            this.dogecoin = dogecoin;
            this.litecoin = litecoin;

            coinServices = new List<ICoinService>();

            coinServices.Add(bitcoinCash);
            coinServices.Add(bitcoin);
            coinServices.Add(dash);
            coinServices.Add(dogecoin);
            coinServices.Add(litecoin);
        }
    }
}
