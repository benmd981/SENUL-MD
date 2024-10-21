const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZQ5X2BwI#MrsiC7blMWDRTStC8IzhWtRutLZE7_TzD2fawFAMmFg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://imgtr.ee/images/2024/09/11/3e6c73da5849ff8b9e48781ab8acbfe4.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "👋 Hello *${pushname}*\n*I AM SENUL-MD I AM ALIVE NOW !*",
SUDO_NB: process.env.SUDO_NB || "94762498519",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};

