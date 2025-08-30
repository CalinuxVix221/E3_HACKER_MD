const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JocklJMmJmM2dUTWJ0bTJBNGI2elovd29xVksvK0kzYzFsTElrN1hsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDNsa3ExSjRZWEdROU0vTmxXMVRRYmZnTTdKZHFkWWZMeEg5THpQZERraz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRlZRQlpHUFlUSm5nMXNQODlUUjR4NXlRSXR1bGlUL2FRQmIycnNkeG1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTkk5WjhxZlY5S1BrVVFNS3F2dHR2ekRNQWcvSEN1MEFaY0JDanJRUkgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldDYzRDbnN4eWNaYlpEN3dqQk5pM3pQemhQQTM2SnhETTZqUEpVWCsvMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkSmM2MU9KR3FPYWdPZG1vRXczbGxDYUlJNjVSWFFzNnBCTU50cDZJV3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJUTDc3V3JFWUVjaThQRDh4S3AweTdWYXlXcmY1UnA4RjA1L0ZRd01Wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3VLdG4vcWdHeVRFVVhrcTVUQXBqOUFMUXlyTXNGQTQzRnExcG9ocGhFaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNXV05ZYU5Qby9saEQwQ2NsbjgrSkFxOHQ1MEptR2k2LzJsaERmc1NsZ29sOXpPbUZRK2Z2SElZMFc3L0I1dHFieHZoLzNKTVNmTXhKNmR6NnR2R0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJFc1NTa1VjczJucnhYQlQyUHZ3MGhWRUhKZjVaSXdRa05iNGlBYnFHdEJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJWV1hSTjVGNCIsIm1lIjp7ImlkIjoiNTA5NDMzMzQ3MzM6MjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNzA4NzEzMjMyMzAzNDY6MjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPbnp0dkFCRUpEWHpNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQamVoRWZ1K3BlMS83T2o3NS94TkJpWlhPeFMrRFVPSXN6dnNQRExGWFFRPSIsImFjY291bnRTaWduYXR1cmUiOiI0Q0l0TXViY2F1ZW5saExOcXBWTkI3S0JubWRMbzN4MDVRRUg3K1FuQW1KUGViWjRrd2dvd0VKWUtjMGRDVFQxVGd4a1BTOUdDWElSK2RRWlFlaGpBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ0RCekdVTTBlejI1cFFhUytJdWQ3cFpKOUNCVjIrSktlKzUyNUxvaDVpWHVldFRZT2dXTHRJbGlOallpR2x3YkkxaFdnZkZJWmtnU2ZKTFAvZzI1REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0MzMzNDczMzoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUNDNvUkg3dnFYdGYrem8rK2Y4VFFZbVZ6c1V2ZzFEaUxNNzdEd3l4VjBFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY1NzI1NjMsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXVMIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "*",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "C D M",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50943334733",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "LORDDEMONDARKSEID",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-HACKER-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "50943334733",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
