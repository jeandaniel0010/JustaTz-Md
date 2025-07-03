const fs = require("fs-extra");
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + "/set.env"
  });
}
const path = require("path");
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lmTUVmYnUvVzRDYlF5TDFyWmhxWGloY0VKai9URGx6YmxiNW1YeStYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTRUVlNWN2U5YnhhQ3l6aW1DYkVmQTJ1aTZzR0pCVDF2Qzdnb3ozMGN6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTDhKeXdrNjFRLy9YUWFra1VEbXE1WXBoblNtdjlEU3ZzL2lPdmJPMm5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdkQwNTlwZGtNMkJOYjNIUE5hUkhTNllEUWJQS09uSkVsVE1oTVdPdUJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFVnhvSmFDcXZqRC8zS1NOa1BZTDR2VWQ2QlhUV1VWNkFBaFdKMy9BRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpmMFhBZHZGUmxlY2p4WGdLWG92YjVzV0VKVDBvYnhVdEw5OFdiVWd5WDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tYUFA5c2J5WlJ3bmsrMGhyWGVzcUs5QW51cU1TVXdaVFB0TkJSYjZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3V4cEFqTW94VzVoblB0TW1VYVFlWmtXWElOSXB0R0ZxZUZ3aUsvbVp3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIN3g0YXZEMVBSQVVQSEFVM2FNTjh6cXB6L2puZVU4SjZSbWEyQkltT3ZRNW40M0hLM3VIREFVTXJiMXlYSWNvWEVtTmJqV3l1dlIwU1czdkh1ZWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJZNTZ3ZEo3MUx5TWNzVEhLSmJjbUNYS2pjNlI0VUlucnp2UnFZTy9ZYjZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyNTA1MDA2OTQ2NTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTRDOTU1RjA2NzEwQkNCMzM2Mzg5MzlFRTIzNTI0MDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTUxMDM0OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOmZhbHNlLCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVBBeEMwUXU5cVh3d1lZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMW94cWVJTGs0emZ0bjJma05CK3hkL2M2WisxSEE5cW1hbkJrMGRoTWkwcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWGdCdjV5VTJTMFQwMG1HUFR6Ykp2MjNGakt2UGZsYXNwamJFR1FuS2owdHNucy9udG1vTFoxWGJ1MmFHWXhjcE44Zmp5ZnpMdmdaR1NPYzZxTW5YQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkNGTHRvUTQ0d2E5UTVQMXdIY2JWUWh6NnVpR0ZUOExnWnlpdTlWelJuL25wL2NKZGgrUUxVdWpSZjZVbDZsYTk1dFk0Y212NjRTcXQ2TmhLRTBFN2h3PT0ifSwibWUiOnsiaWQiOiIyMjUwNTAwNjk0NjUyOjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpFQU4gREFOSUVMIiwibGlkIjoiNDk3ODQzNzU1ODM5MjoyMEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDUwMDY5NDY1MjoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkYU1hbmlDNU9NMzdaOW41RFFmc1hmM09tZnRSd1BhcG1wd1pOSFlUSXRMIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE1MTAzNDQsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDWlYifQ==",
  'PREFIXE': process.env.PREFIX || '.',
  'OWNER_NAME': process.env.OWNER_NAME || "J𝖀𝗦𝐓Λ𝗧𝙕-MD",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || "2250500694652",
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "oui",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "J𝖀𝗦𝐓Λ𝗧𝙕-MD",
  'URL': process.env.BOT_MENU_LINKS || "https://files.catbox.moe/s326s2.jpg",
  'MODE': process.env.PUBLIC_MODE || 'yes',
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'ANTICALL': process.env.ANTICALL || "non",
  'AUTO_REACT_STATUS': process.env.AUTO_REACT_STATUS || "yes",
  'DP': process.env.STARTING_BOT_MESSAGE || "yes",
  'ADM': process.env.ANTI_DELETE_MESSAGE || "yes",
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
