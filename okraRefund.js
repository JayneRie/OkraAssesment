//company ID: 484929849
//customer ID: 573839293
const axios = require('axios')

async function refundCustomer(company, user, amount) {
    
  try {
    let customerPreviousWallet = await axios.post('https://api.okra.ng/v2/mock-api/fetch-wallet',
    {
        "id": user  
    })
   //console.log('customerPreviousWallet', customerPreviousWallet.data)
    let balanceAfterRefund = await axios.post(`https://api.okra.ng/v2/mock-api/pay`,
   {  "from_id": company, 
      "to_id": user, 
      "amount": amount
   } ,
        
        )
     //console.log('balanceAfterRefund', balanceAfterRefund.data.data)    
     let customerWalletBalances = {
        previousWalletBalance: customerPreviousWallet.data.data.wallet,
        currentWalletBalance: balanceAfterRefund.data.data.wallets.to
     }
     console.log('Customer Wallet Balances =>', customerWalletBalances);
  } catch (error) {
     console.log(error.response.data) 
  }
}
  
refundCustomer('484929849', '573839293', 2003.0)