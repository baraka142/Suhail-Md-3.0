const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_36_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZL21TVVc2TkxSR0dibDFSOUVLYVFldjVQY0N6NUQ2SzNTT1ZlbW1QVHhFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5ZERVaFZqTFNhQ3hOa05LS1BIVVhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA4ZTU2MmVkLTVlN2EtNDg1Mi1iNjUxLWQzMjRmYmE0NDk5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDI2LFxuICAgICAgMjE3LFxuICAgICAgMTgzLFxuICAgICAgMTg4LFxuICAgICAgMjEwLFxuICAgICAgMTM5LFxuICAgICAgNDAsXG4gICAgICAxMTEsXG4gICAgICAxMDQsXG4gICAgICAxODIsXG4gICAgICAxODIsXG4gICAgICAyMzEsXG4gICAgICAyNTMsXG4gICAgICA0MCxcbiAgICAgIDE3MixcbiAgICAgIDE1NyxcbiAgICAgIDExMSxcbiAgICAgIDEyMCxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMyxcbiAgICAgIDgzLFxuICAgICAgMTY0LFxuICAgICAgMTY0LFxuICAgICAgMTI3LFxuICAgICAgMjksXG4gICAgICAzMSxcbiAgICAgIDIsXG4gICAgICA5NixcbiAgICAgIDE1NCxcbiAgICAgIDExOSxcbiAgICAgIDE3NSxcbiAgICAgIDIwMixcbiAgICAgIDg5LFxuICAgICAgMTA4LFxuICAgICAgMTQ3LFxuICAgICAgMTQ5LFxuICAgICAgMTc0LFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVA3ZzRBRkVMMmxpc01HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCQzdSd243VjE4ZjZ3SmtyZmM3VFVrMm5ZakNZd0hFKzVlamI3bzR6d0RBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBuNklmYVQrc1BIQ00vWkwxTmI4YTFmYlRzNUw4bDY4OXR0ZitTMnVLYUlzVDloWTQrVXUwaEUrMGhiZ1VxN1BJN09rMTZOMFcxVjUvQU1Oa3RBTkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdib2JsRHdGSC8zUkZlaVpzWGlQcmt1dTY3bFlxQzlvTmlPWDhNUmFXYVhNVEpUSS9vN3pxTEt6M3dLL2sxL1NOSGNLRkIxd0svcnEvbVJCWW9mbERBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTAyNjUyNjc1OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTEyNjQwMzcyOTgyNTg6MzRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMDI2NTI2NzU6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUxMjkwNTYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTG1GXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMbUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJieHYxL1BsQmZOcUcraDRHNWVDRTVWS3JTLy9mM0dGaEZ2Nm5lamZDeGFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDIyNDIyNDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NzYzOTk1MDg4N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxtRy5qc29uIjogIntcImtleURhdGFcIjpcIjNMMkRoVEorWTNkR29xMVc4MFVVTDgxaWxadGI3U25FeU82UGNDNlpzSTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM0MjI0MjI0MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTG1ILmpzb24iOiAie1wia2V5RGF0YVwiOlwidkI0VjR4ano3L0FJL3FKaHhGdGtQdmJTZ2kzb0YwUEFUbkZQWHpUemhUYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQyMjQyMjQzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTEzMTAxMjg4N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
