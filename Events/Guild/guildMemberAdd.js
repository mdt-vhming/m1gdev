const { EmbedBuilder } = require("@discordjs/builders");
const { Embed } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const { user, guild } = member;
        const welcomeChannelIds = ['1057393807383072828', '1170033182020751390']; // Guild muốn gửi thông báo vào server ! 

        // Loop through each guild and send the welcome message
        welcomeChannelIds.forEach((channelId) => {
            const welcomeChannel = guild.channels.cache.get(channelId);

            // const memberRole = '1170064249813467186'; // ID Role bạn muốn add vào 

            if (welcomeChannel) {
                const welcomeMessage = `**<a:callmeri:1162029869362843751> Hí <@${member.id}> ! Chào mừng cậu tới Hắc Miêu Entertainment** <a:997092119355338854:1084392299217297438>: 
                \n <a:excited:1167039782497554483> *Dưới đây là một số điều cần biết khi bạn đến.* 
                \n <a:Excuseme:1167039792068960307> **Đọc luật server tại : <#1170032508210008115> ** 
                \n <a:FZ_panda_swag54:1087207527151845557> **Nhận thông báo tại : <#1170590581827829770>  ** 
                \n <a:amrakwork:1167039653745021018> **Nhận vai trò tại : <id:customize> ** 
                \n <a:4188loop51:1167039612636643468> **Chat cùng mọi người tại : <#1057393807383072828>  ** 
                \n <a:1066922192446705714:1090319488433520742>  Chúng mình rất vui vì được chào đón bạn đến với server của chúng mình. Chúc bạn có những khoảng thời gian vui vẻ ở server của chúng mình.`;

                const welcomeEmbed = new EmbedBuilder()
                    .setColor(0xffc0cb)
                    .setTitle(`Thành viên mới !! Bạn là thành viên thứ ${guild.memberCount}`)
                    // .setURL('https://discord.gg/hacmieu')
                    .setAuthor({ name: 'HACMIEU ENTERTAINMENT', iconURL: 'https://media.discordapp.net/attachments/1182772975540371456/1182781926239649883/Untitled-2.png', url: 'https://vnpxe.net/m1gdev' })
                    .setDescription(welcomeMessage)
                    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                    // .addFields(
                    // 	{ name: 'Regular field title', value: 'Some value here' },
                    // 	{ name: '\u200B', value: '\u200B' },
                    // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
                    // 	{ name: 'Inline field title', value: 'Some value here', inline: true },
                    // )
                    // .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                    .setImage('https://cdn.discordapp.com/attachments/1182772975540371456/1182781477222613012/VE_Project_1-1.gif')
                    .setTimestamp()
                    .setFooter({ text: 'm1gdev', iconURL: 'https://media.discordapp.net/attachments/1182772975540371456/1182773034893967471/m1gdev.png' });

                // .setTitle("**New member!**")
                // .setDescription(welcomeMessage)
                // .setColor(0x037821)
                // .addFields({name: 'Total members', value: `${guild.memberCount}`})
                // .setTimestamp();

                welcomeChannel.send({ embeds: [welcomeEmbed] });
                // member.roles.add(memberRole); // Add role tự động khi vào server 
            }
        });
    }
}