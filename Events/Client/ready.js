const { Client } = require('discord.js');
const mongoose = require('mongoose');
const config = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        await mongoose.connect(config.mongodb || '', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        if (mongoose.connect) {
            console.log('MongoDB đã sẵn sàng hoạt động !')
        }
        console.log(`${client.user.username} đã sẵn sàng hoạt động !`);
    },
};