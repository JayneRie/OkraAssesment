const _ = require('lodash');

let app = {
  id: "484929849",
  company_name: "Budget Core Limited",
  slug: "budget-core-app"
}

let user = {
  id: "573839293",
  name: "Dami Banwo",
  accounts: [
    {
      id: "3084202491",
      name: "Core Savings",
      act_no: 1933849303,
      connected: true,
      connected_apps: ["catch-a-ride-app"]
    },
    {
      id: "3084202492",
      name: "Current Account",
      act_no: 2844908489,
      connected: false,
      connected_apps: []
    }
  ]
}

function connectApp() {
  let new_accounts = []
  user.accounts.map(account => {
//     let new_account = JSON.parse(JSON.stringify(account))
//     if (account.connected) {
//        new_accounts.push(new_account)
//        account.connected_apps.push(app.slug)
//        console.log("connectApp", new_accounts) 
//     }
//   })
//    user.accounts = new_accounts
//  //  console.log("connectApp", user.accounts) 
if (account.connected) {
           if (_.includes(account.connected_apps,app.slug)) return 
            account.connected_apps.push(app.slug)
        } 
})
}
_.times(3, connectApp);

console.log('User => ', {id: user.id, name: user.name}, '\nAccounts  =>', user.accounts)