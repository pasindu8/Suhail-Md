const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "SUHAIL_09_05_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgODQsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwLFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk0zZ20xZDFYMWcraFd1Qmd1WmdTWXE4Q1V4eVRsam5HSGlqWkhFUk03aEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVOUzIwY1ctUVNxeXlJWG1oZ1JaR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzVhYmY5NGMtZjkwZS00MWNlLThmN2YtOTNmMTIwMmUzYjY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDIyNCxcbiAgICAgIDMxLFxuICAgICAgMjA1LFxuICAgICAgNzksXG4gICAgICA0LFxuICAgICAgOTEsXG4gICAgICAyNDYsXG4gICAgICAyNTMsXG4gICAgICAxOTEsXG4gICAgICAzNSxcbiAgICAgIDIwMCxcbiAgICAgIDI0MyxcbiAgICAgIDI5LFxuICAgICAgNjgsXG4gICAgICAyMDEsXG4gICAgICAyNTMsXG4gICAgICAyMjUsXG4gICAgICAxNDYsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDg4LFxuICAgICAgMTI5LFxuICAgICAgOTgsXG4gICAgICAyMTksXG4gICAgICAxODEsXG4gICAgICA1MCxcbiAgICAgIDM1LFxuICAgICAgNjUsXG4gICAgICAxLFxuICAgICAgMTI1LFxuICAgICAgMTkzLFxuICAgICAgMTE1LFxuICAgICAgMjU0LFxuICAgICAgNTcsXG4gICAgICAxOSxcbiAgICAgIDYxLFxuICAgICAgMjIwLFxuICAgICAgNCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYV0xMMzlaVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODE5NDMxOTI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYzNzU0MDQyMzcyMTY2OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJCeWRJQ0VMamsvYlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1NFFMMVBWRXhlWks0L3h4YXBFUFl3L0QwTVpNUmpLMzlwdnBJU3o2MDNBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlUUzFtbWZmdkxwK0sza1NNeUpmN200TG1heDZGc1ZXLzdkbHlOaktUdzlNUm9EUTUvQzBkNU1KV0dLSEtvWTdia2NYcmJjTTdXMXlrTlhRSWpGZkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpJM01wMXhNS0l4RXNncjh1azBCekxSSXRxRzhsUk9XaWNFZ2ZJaU5EQ2J4Y2JmR2g1TExKZmxmWlBLaWpPcDdaOFJKcXp1ZUF4cCswMjBTVzZCT0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzgxOTQzMTkyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzI1NDk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDhpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEOGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoNG55RlZUVXhIR2ZjMlZkR2tMa2RJakFIZjU2V2NUUG8yRXRSODI4T3RjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMDA0MTczNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjIyOTY1NTIzXCJ9Igp9"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
