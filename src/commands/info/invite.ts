import * as Discord from "discord.js";

// Invite command

/**
 * Answers with a link to invite the bot
 * @param {Discord.Client} Client the client
 * @param {Discord.CommandInteraction & Discord.Message} Interaction the slash command that contains the interaction name
 * @param {string[]} args the command args
 * @param {any} options some options
 */
module.exports = {
    name: "invite",
    description: "Sends a link to invite the bot to servers",
    category: "info",


    async execute(Client: Discord.Client, interaction: Discord.CommandInteraction & Discord.Message, args: string[], ops) {
        const invite = new Discord.MessageEmbed()
            .setAuthor(interaction.member.user.username, interaction.member.user.displayAvatarURL())
            .setColor("RANDOM")
            .setTitle("Invite the bot")
            .setURL("https://discord.com/oauth2/authorize?client_id=497443144632238090&permissions=8&scope=bot")
            .setDescription("Click [here](https://discord.com/oauth2/authorize?client_id=497443144632238090&permissions=8&scope=bot) to invite the bot.")
            .setFooter(Client.user.username, Client.user.displayAvatarURL())

        interaction.reply({ embeds: [invite] });
    }
}
