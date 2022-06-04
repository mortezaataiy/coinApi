require('dotenv').config();
const api = require('kucoin-futures-node-api');

console.log('Test start in mode: ',process.env.MODE)

let config = process.env.MODE == 'prod' ? {
    apiKey: process.env.KC_API_KEY_PROD,
    secretKey: process.env.KC_API_SECRET_KEY_PROD,
    passphrase: process.env.KC_API_PASSPHRASE_PROD,
    environment: 'live' //prod
} :  {
    apiKey: process.env.KC_API_KEY_TEST,
    secretKey: process.env.KC_API_SECRET_KEY_TEST,
    passphrase: process.env.KC_API_PASSPHRASE_TEST,
    environment: 'sandbox' //test
};

const apiLive = new api()
apiLive.init(config)

// Async/Await get account info example (private & signed)
async function getAccountOverview() {
    try {
        let r = await apiLive.getAccountOverview()
        console.log(r.data)
    } catch (err) {
        console.log(err)
    }
}

getAccountOverview();
