const axios = require('axios')

async function userLogin(username, password) {
 try {
    let usersDetailsAtLogin = await axios.post('https://api.okra.ng/v2/mock-api/login',
    {
       "username": username,
       "password": password
   },
)
 // console.log("response", usersDetailsAtLogin.data.data.profile);
  return usersDetailsAtLogin.data.data.profile
 } catch (error) {
     console.log(error.response.data)  
 }
}

async function refreshUserWallet(walletId,mockVariable) {
   try {
    let userDetailsAtRefresh = await axios.post('https://api.okra.ng/v2/mock-api/refresh-wallet',
        {
        "id": walletId,
        "variable": mockVariable
    },
   )
  // console.log("After refresh",userDetailsAtRefresh.data.data.wallet);
   return userDetailsAtRefresh.data.data.wallet
   } catch (error) {
    console.log(error.response.data) 
   } 
}

async function userLogout() {
    try {
        let userLogoutInformation = await axios.get('https://api.okra.ng/v2/mock-api/logout')
        //console.log("user logout", userLogoutInformation.data.message);
        return userLogoutInformation.data.message
    } catch (error) {
       // console.log(error.response.data)
    }
}

async function start() {
    let userDetailsAtLogin = await userLogin('okra_user', 'okra_pass')
    let userDetailsAtRefresh = await refreshUserWallet(userDetailsAtLogin.id, 'mockVariable')
    let logoutMessage = await userLogout()
    let userDetails = {
        name: userDetailsAtLogin.name,
        userId: userDetailsAtLogin.id,
        walletBefore: userDetailsAtLogin.wallet,
        walletAfter: userDetailsAtRefresh,
        messageForLogOut: logoutMessage
    }
    console.log("User Details=>", userDetails);
}
start()