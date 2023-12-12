const {SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong 🏓")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // Chỉ dành cho quyền admin
    execute(interaction) {
        interaction.reply({content: "Pong 🏓", ephemeral: false}) // Chỉ mỗi mình thấy
    },
};