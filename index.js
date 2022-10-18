const {Client, GatewayIntentBits} = require('discord.js');

require("dotenv").config();

const uberduck = require("./uberduck.js")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("Bot is ready");
});

client.on("messageCreate", (msg) => {
    if(msg.content.startsWith("hey shredder, say")) {
        console.log("here")
        let ind_quote_1 = 18;
        let ind_quote_2 = msg.content.length;
        let reply = msg.content.substring(ind_quote_1, ind_quote_2);
        console.log(reply)
        uberduck.get_path_vt("shredder-nasb", reply).then((path) => {
            console.log("working")
            msg.channel.send({
                files: [path],
            })
        })
    }
});