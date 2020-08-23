const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send(`Haldlo, ${message.author}!`);



}

module.exports.oef = {
    name: "haloo"
}