const DISCORD = require("discord.js");

// Music command

exports.run = async (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);

    let parseURL = fetched.queue[0].url.split('watch?v=')[1];

    var time = fetched.queue[0].songLength;
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    let musicInfoEmbed = new DISCORD.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`Information for ${message.author.tag}`)
        .setColor('#f98257')
        .addField('Music name', `:musical_note: - **${fetched.queue[0].songTitle}**`)
        .addField('Music asked by?', `*${fetched.queue[0].requester}*`)
        .addField('Music creator', fetched.queue[0].songAuthor)
        .addField('Music length', `${minutes} minute(s) et ${seconds} secondes.`)
        .addField("Announcement channel", `Channel <#${fetched.queue[0].announceChannel}>`)
        .setURL(`https://youtube.com/${fetched.queue[0].url}`)
        .setThumbnail(`https://img.youtube.com/vi/${parseURL}/0.jpg`)
        .setFooter(client.user.username, client.user.avatarURL)
        .setTimestamp()
    message.channel.send(musicInfoEmbed);
}