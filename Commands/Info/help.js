const { ComponentType, EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Các lệnh có sẵn trên con bot này !"),
    async execute(interaction) {
        const emojis = {
            info: "📜",
            moderation: '🛠',
            general: "⚙",
        };

        const directories = [
            ...new Set(interaction.client.commands.map((cmd) => cmd.folder)),
        ];
    },
};