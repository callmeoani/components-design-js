const dummyData = {
  financialDates: {
    startFinancialPeriod: {
      day: 1,
      month: 'Aug',
      year: 2021
    }, 
    endFinancialYear: {
      day: 1,
      month: 'Nov',
      year: 2021
    },
  },

  revenueDetails: {
    totalRevenue: 824000,
    percentageIncrease: 9.78,
    increaseFromPrevMonth: 15,
  },

  bottomCardsDetails: [
    {
      label: 'Selling Product', 
      value: 795000,
      description: 'sold in a month',
      piecesSoldInAMonth: 1298,
    },

    {
      label: 'Selling Product', 
      value: 2500,
      description: 'Add in one month',
    },

    {
      label: 'Selling Product', 
      value: 340,
      description: 'Installed Campaign',
    },
  ],
}

export default dummyData;