const { CommandInteraction } = require('discord.js');

module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        if (interaction.isChatInputCommand()) {

            const command = client.commands.get(interaction.commandName);

            if (!command) {
                interaction.reply({ content: "Lệnh lỗi thời ( Call me: vhming )" });
            }

            command.execute(interaction, client);
        } else if (interaction.isButton()) {
            const role = interaction.guild.roles.cache.get("1170064249813467186");
            return interaction.member.roles
                .add(role)
                .then((member) =>
                    interaction.reply({
                        content: `${role} has been assigned to you.`,
                        ephemeral: true,
                    }),
                );
        } else {
            return;
        }
    },
};