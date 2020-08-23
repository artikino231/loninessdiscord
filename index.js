const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();

const cheerio = require('cheerio');

const request = require('request');


bot.login(process.env.token);

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online `)

    bot.user.setActivity("!help - discord.gg/8KgjKWS ", {type: "PLAYING"});
});

bot.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];

    if(command === `${prefix}ping`) {
        return message.channel.send(`pong!`);
    }
    
    if(command === `fuck`) {
        return message.channel.send(`its fuvk`);
    }
    
    if(command === `fuvk`) {
        return message.channel.send(`its fuck stupid fortnite kid`);
    }
    
    if(command === `${prefix}nude`) {
        number = 47
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/" + imageNumber + ".png"]} )



    }
    
    
        if(command === `${prefix}hnsfw`) {
        
            var halloEmbed = new discord.MessageEmbed()
                .setTitle('IM STILL WORKING WITH THIS COMMAND')
                .setDescription(`!nude - you do the command !nude you can often get the same photo because the bot chooses from 47 nudes and sends random I try to make this even better`)
                .setColor("#f54905")
                .addField(`User: `, message.author)
                .addField(`id: `, message.member.id)
                .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/attachments/746823491600515243/747041280445513768/1.png');
        
            return message.channel.send(halloEmbed);
        }
        
    

    if(command === `${prefix}rules`) {
        
        var halloEmbed = new discord.MessageEmbed()
            .setTitle('rules')
            .setDescription(`1: No advertising.
            2: Respect everyone.
            3: Don't post the wrong stuff in the wrong channel
            4: Don't ask for roles.
            5: Keep arguments in PM.
            6: No NSFW Content. (pics,nudity, porn. etc)
            7: Don't spam
            8: Don't tag members for useless reasons.
            9: No ear rapes in vcs (voice channels).
            10: No minimodding. (this can get you muted right away.)
            11: No DDoS threats/IP grabbing (will be banned on the spot.)
            12: No attempting to leave the server to get rid of warnings (will also result in a ban)
            13: Don't Spam mention Higher Roles
            14: No sending/sharing of harmful tools or stealers (Will ofc result ban + report!)
            15: No sending/sharing harmful $h!t in DM to people in server. Applies to everyone including staff! (Will ofc result ban + report!)`)
            .setColor("#000000")
            .addField(`User: `, message.author)
            .addField("Joined server at: ", message.member.joinedAt)
    
        return message.channel.send(halloEmbed);
    }

    

    
    
    
 
    
    if(command === `${prefix}help`) {
        
        var halloEmbed = new discord.MessageEmbed()
            .setTitle('im here to help you')
            .setDescription(" ``!hcommands`` ``!hnsfw`` ``!hmusic`` ")
            .setColor("#000000")
            .addField(`User: `, message.author)
            .setThumbnail(`https://cdn.discordapp.com/avatars/744249495323279390/4a559bd0f55deb60dcbaa2a13a59a173.png?size=128`)
            .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/attachments/746823491600515243/747041280445513768/1.png');
    
    
        return message.channel.send(halloEmbed);
    }
    
    


    if(command === `${prefix}hcommands`) {
        
        var halloEmbed = new discord.MessageEmbed()
            .setTitle('im here to help you')
            .setDescription
            (`1: ping - says pong! back
            2: trese - tells my friends yt channel
            3: info - sends info about owner 
            4: server info - tells info about the server 
            5: help - shows all the commands
            6: secret - telss you a secret
            7: 
            8: 
            9: 
            10: 
            11: 
            12: 
            13: 
            14: 
            15: `)
            .setColor("#000000")
            .addField(`User: `, message.author)
            .setThumbnail(`https://cdn.discordapp.com/avatars/744249495323279390/4a559bd0f55deb60dcbaa2a13a59a173.png?size=128`)
            .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/attachments/746823491600515243/747041280445513768/1.png');
    
        return message.channel.send(halloEmbed);
    }
    
  
    if(command === `${prefix}info`) {
        
        var halloEmbed = new discord.MessageEmbed()
            .setTitle('info about the maker ')
            .setDescription(`the owner is loniness#4215`)
            .setColor("#0099ff")
            .addField(`User: `, message.author)
            .addField("user id: ", message.member.id)
            .setAuthor('my youtube channel', 'https://cdn.discordapp.com/attachments/746467396708991144/746694113482768424/4a559bd0f55deb60dcbaa2a13a59a173.png', 'https://www.youtube.com/channel/UCiMbM9vzDO-xf5J1Po3wnvg?view_as=subscriber')
            .addField('Current Server', message.guild.name)
            .setThumbnail(`https://cdn.discordapp.com/avatars/744249495323279390/4a559bd0f55deb60dcbaa2a13a59a173.png?size=128`)
            .addField("Joined server at: ", message.member.joinedAt)
            .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/attachments/746823491600515243/747041280445513768/1.png');
    
        return message.channel.send(halloEmbed);
    }
    if (command === `${prefix}trese`) {
        
        var halloEmbed = new discord.MessageEmbed()
            .setTitle('trese the king')
            .setDescription(``)
            .setColor("#050505")
            .addField(`User: `, message.author)
            .addField("id: ", message.member.id)
            .setAuthor('youtube channel', 'https://cdn.discordapp.com/attachments/746467396708991144/746702196414087168/unnamed.jpg', 'https://www.youtube.com/channel/UCuoq9aVkMM_4kLrMzi4Qn6A')
            .addField('Current Server', message.guild.name)
            .setThumbnail('https://cdn.discordapp.com/attachments/746467396708991144/746702196414087168/unnamed.jpg')
            .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/attachments/746823491600515243/747041280445513768/1.png');
    
        return message.channel.send(halloEmbed);

    }
    if(command === `${prefix}invite`) {
        
        var halloEmbed = new discord.MessageEmbed()
            .setTitle('Hey thank you for the invitation!')
            .setAuthor('click here to invite', 'https://cdn.discordapp.com/attachments/746823491600515243/746823528791277648/4a559bd0f55deb60dcbaa2a13a59a173.png', 'https://discord.com/api/oauth2/authorize?client_id=746369024614727760&permissions=8&scope=bot')
            .setColor("#0099ff")
            .addField(`User: `, message.author)
            .addField("id: ", message.member.id)
            .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/attachments/746823491600515243/747041280445513768/1.png');
        return message.channel.send(halloEmbed);
    }
    
    
});


    


bot.on("guildMemberAdd", member => {

    var joinEmbed = new discord.MessageEmbed()
       .setAuthor(`${member.user.tag}`)
       .setDescription("member joined")
       .setColor("#00ffe1")
       .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/avatars/744249495323279390/4a559bd0f55deb60dcbaa2a13a59a173.png?size=128')
       .setTimestamp()
       .setImage(member.user.avatarURL());
    
    bot.channels.cache.find(ch => ch.name === "dsa").send(joinEmbed); 
});

bot.on("guildMemberRemove", member => {

    var joinEmbed = new discord.MessageEmbed()
       .setAuthor(`${member.user.tag}`)
       .setDescription("member left")
       .setColor("#00ffe1")
       .setFooter('made by loniness#4215', 'https://cdn.discordapp.com/avatars/744249495323279390/4a559bd0f55deb60dcbaa2a13a59a173.png?size=128')
       .setTimestamp()
       .setImage(member.user.avatarURL());
    
    bot.channels.cache.find(ch => ch.name === "dsa").send(joinEmbed); 
});


bot.on("guildMemberAdd", member  => {
    
    var role = member.guild.roles.cache.get('746464304378806393');

    if(!role) return;

    member.roles.add(role);


})


