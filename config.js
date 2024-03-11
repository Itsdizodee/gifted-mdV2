const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-mdV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254111200187" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111200187";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254728782591,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUg3RHRLeC9VSC8xZHFpOXFIQS9lNUN3aXdDTnJ5Zk9ydGR6bUthTjJYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0s4VXB2cFFGQlJEMmc2akJKVi9qeThtdXBYS0VxR2liZER5Ym4zQUZ6WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQkNac2hMR2ozZTV5cDBXbndzRU84bWo3b2VsWWlsRUFONFFoMDZNTEU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4NnlobDNWNW52WDJjN3Q3T1o2TjFHclpwVTEwVWRoRU9hWG5iVk1SaGhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMdHZGeFlSVFFIblFRSUszMi95SkFMUlMxOVROMGlzNE40VU1tSTdsVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJYUlkZFFNTUxkS1pXNDdqZVEzZ29xTnNndXFHR0NhRC85WjlmZHQyVTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVqY3djQUY0bkpidTJ4UG1IaFlYbk12Z3JERlNyeG9TSXhVSkZkR24yYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXpDaGN2UVc3eXJ4QldEK2NDdS9oSlprTGZJYmZjdVhUT1ErWlJ6c0pDbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp6WjdRbzNSK20wVHZGWkExWFVoYTZ6T1pzUk1PQURmdUZ0TEJVMXVucmNNY3kwbWkxT1ZCY08vRWdNNWllaXN2R25oT0FxVVhJMllDcXJCSzJXakJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiIxZTVhSUR0c2U2VXgzYUNtU1Z1V2x2Q1JjbXQveGovTjVzVllGWmpWQVJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpRUdfZVBDT1R6U1BYeTVCTmxuSVhBIiwicGhvbmVJZCI6IjZjMjg4MzdjLTRiZjgtNGE4ZC1hNDM2LTk2NTc4MjVmYTc5ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxbHZwRDhSdTF3RVZicTNRakd3bVpkanZIM1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDBxSjloUHZwVm1jRzROVzRnaHZ4RTNrM04wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVLSEZMOUpNIiwibWUiOnsiaWQiOiIyNTQxMTEyMDAxODc6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEaXpvIEZ48J+TiCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSy9BMzhNREVON1V2YThHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK2pUT3VQY1RFQjlLRWE0YjZmOTZSZTl1bW0rWUdvTktrb2p1OHhKK3p5ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM1JwL0hoNzg4V2tmc2tEK0N4SHJybC92Vmt6Q2ZjL1htSVZRaFk0WjRHTWhIa1FxVUltNDQ4eVhJdVRxRGdwM1kwMnl3OW10Nm8yTGFScnZ2OTFvQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InJuWVhiZDdOaEZUS1RlNHE4a09qNEtYeUZSRjM2dWMzdzJ6YUFCMGRIRDJrSWVRLzVSMEJIbzhGUyt5dVlKaStjalhrSFhmR0Y2SGEzT3FDTnh3UUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTExMjAwMTg3OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZm8wenJqM0V4QWZTaEd1RytuL2VrWHZicHB2bUJxRFNwS0k3dk1TZnM4dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMDE4OTIxM30=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.0.0",
  caption : process.env.CAPTION || "©²⁰²⁴ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰ - ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "dee",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's dee",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "A9LBre4p4QbuyJ4f2ZULpwuc",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "c466ba1b-7b1f-456f-be9c-40f94fec55a4",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "papideed",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "9f8f7cb2e5827dd76a4a5034e28a96d3",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
