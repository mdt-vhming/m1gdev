const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("CHE DẤU VẾT !")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Số bột rắc để che dấu vết')
                .setRequired(true)
        )
        .addUserOption(option =>
            option.setName('target')
                .setDescription('...')
                .setRequired(false)
        ),

    async execute(interaction) {
        const { channel, options, user, guild } = interaction;

        const amount = options.getInteger('amount');
        const target = options.getUser("target");

        const messages = await channel.messages.fetch({
            limit: amount + 1,
        });

        const res = new EmbedBuilder()
            .setColor(0xffc0cb);

        if (target) {
            let i = 0;
            const filtered = [];

            messages.filter((msg) => {
                if (msg.author.id === target.id && amount > i) {
                    filtered.push(msg);
                    i++;
                }
            });

            await channel.bulkDelete(filtered).then(messages => {
                res.setDescription(`Đã xóa ${messages.size} dấu vết ở ${target}. Xóa bởi <@${user.id}>`);
                interaction.reply({ embeds: [res] });
            });
        } else {
            await channel.bulkDelete(amount, true).then(messages => {
                res.setDescription(`Đã xóa ${messages.size} dấu vết. Xóa bởi <@${user.id}>`);
                interaction.reply({ embeds: [res] });
            });
        }
    }
}
