const profileModel = require('../models/profileSchema');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isCommand()) return;

        let profileData;

        try {
            profileData = await profileModel.findOne({ userId: interaction.user.id });
            console.log("Query Result for findOne:", profileData);

            if (!profileData) {
                console.log('No profile found, creating new one');
                profileData = await profileModel.create({
                    userId: interaction.user.id,
                    serverId: interaction.guild?.id || null,
                });
                console.log("New profile created:", profileData);
            }
        } catch (e) {
            console.error("Error during database operations:", e);
            await interaction.reply({
                content: 'There was an error accessing your profile data!',
                ephemeral: true
            }).catch(() => {});
            return;
        }

        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No Command Matching: ${interaction.commandName} was found.`);
            await interaction.reply({
                content: 'This command was not found!',
                ephemeral: true
            }).catch(() => {});
            return;
        }

        try {
            await command.execute(interaction, profileData);
        } catch (e) {
            console.error(`Error Executing: ${interaction.commandName}`);
            console.error(e);

            if (!interaction.replied && !interaction.deferred) {
                await interaction.reply({
                    content: 'There was an error executing this command!',
                    ephemeral: true
                }).catch(() => {});
            }
        }
    },
};
