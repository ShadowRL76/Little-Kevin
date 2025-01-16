const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const profileModel = require("../models/profileSchema");

const SHOP_ITEMS = {
    plants: [
        { id: 'sunflower', name: '🌻 Sunflower', cost: 100, currency: 'seeds', description: 'A bright and cheerful flower' },
        { id: 'rose', name: '🌹 Rose', cost: 250, currency: 'seeds', description: 'A classic symbol of beauty' },
        { id: 'cactus', name: '🌵 Cactus', cost: 500, currency: 'seeds', description: 'A hardy desert plant' },
        { id: 'bonsai', name: '🎋 Bonsai', cost: 1000, currency: 'seeds', description: 'A miniature tree requiring patience' },
    ],
    special_roles: [
        {
            id: 'timeout_master',
            name: '⏰ Timeout Master',
            cost: 5,
            currency: 'buds',
            duration: 7 * 24 * 60 * 60 * 1000, // 1 week in ms
            roleId: 'YOUR_ROLE_ID_HERE',
            description: 'Give short timeouts to other members (max 5 minutes)'
        },
        {
            id: 'nickname_changer',
            name: '📝 Nickname Master',
            cost: 3,
            currency: 'buds',
            duration: 7 * 24 * 60 * 60 * 1000,
            roleId: 'YOUR_ROLE_ID_HERE',
            description: 'Change nicknames of other members once per hour'
        },
        {
            id: 'burger_master',
            name: '🍔 Burger Master',
            cost: 2,
            currency: 'buds',
            duration: 7 * 24 * 60 * 60 * 1000,
            roleId: 'YOUR_ROLE_ID_HERE',
            description: 'Access to special burger-related commands'
        }
    ]
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('View and purchase items from the shop')
        .addSubcommand(subcommand =>
            subcommand
                .setName('view')
                .setDescription('View available items in the shop')
                .addStringOption(option =>
                    option
                        .setName('category')
                        .setDescription('Shop category to view')
                        .setRequired(false)
                        .addChoices(
                            { name: 'Plants', value: 'plants' },
                            { name: 'Special Roles', value: 'special_roles' },
                            { name: 'All', value: 'all' }
                        )
                ))
        .addSubcommand(subcommand =>
            subcommand
                .setName('buy')
                .setDescription('Purchase an item from the shop')
                .addStringOption(option =>
                    option
                        .setName('item_id')
                        .setDescription('The ID of the item to purchase')
                        .setRequired(true)
                )),
    async execute(interaction) {
        const category = interaction.options.getString('category') || 'all';
        if (interaction.options.getSubcommand() === 'view') {
            await handleShopView(interaction, category);
        } else if (interaction.options.getSubcommand() === 'buy') {
            await handleShopPurchase(interaction);
        }
    }
};


async function handleShopView(interaction, category) {
    const embed = new EmbedBuilder()
        .setColor('#FF9933')
        .setDescription('Welcome to the shop! Use `/shop buy item_id` to make a purchase.')
        .setThumbnail(interaction.guild.iconURL())
        .setFooter({ text: 'Prices subject to change' });

    if (category === 'plants') {
        embed.setTitle('🏪 Garden Shop');
    } else if (category === 'special_roles') {
        embed.setTitle('✨ Role Shop');
    } else {
        embed.setTitle('🏪 Garden & ✨ Role Shop');
    }

    if (category === 'all' || category === 'plants') {
        let plantsText = SHOP_ITEMS.plants.map(item =>
            `**${item.name}** (ID: \`${item.id}\`)\n` +
            `🌱 ${item.cost} seeds\n` +
            `📝 ${item.description}\n`
        ).join('\n');

        embed.addFields({ name: '🌱 Plants', value: plantsText || 'No plants available' });
    }

    if (category === 'all' || category === 'special_roles') {
        let rolesText = SHOP_ITEMS.special_roles.map(item =>
            `**${item.name}** (ID: \`${item.id}\`)\n` +
            `🌿 ${item.cost} buds\n` +
            `⏳ Duration: 1 week\n` +
            `📝 ${item.description}\n`
        ).join('\n');

        embed.addFields({ name: '✨ Special Roles', value: rolesText || 'No roles available' });
    }

    await interaction.reply({ embeds: [embed] });
}

async function handleShopPurchase(interaction) {
    const itemId = interaction.options.getString('item_id');

    const item = [...SHOP_ITEMS.plants, ...SHOP_ITEMS.special_roles]
        .find(item => item.id === itemId);

    if (!item) {
        return await interaction.reply({
            content: '❌ Invalid item ID. Use `/shop view` to see available items.',
            ephemeral: true
        });
    }

    try {
        const userProfile = await profileModel.findOne({ userId: interaction.user.id });

        if (!userProfile) {
            return await interaction.reply({
                content: '❌ You don\'t have a profile yet! Use daily commands to start earning seeds.',
                ephemeral: true
            });
        }

        if (item.currency === 'seeds' && userProfile.balance < item.cost) {
            return await interaction.reply({
                content: `❌ You need ${item.cost} seeds to buy this item. You only have ${userProfile.balance} seeds.`,
                ephemeral: true
            });
        } else if (item.currency === 'buds' && userProfile.buds < item.cost) {
            return await interaction.reply({
                content: `❌ You need ${item.cost} buds to buy this item. You only have ${userProfile.buds || 0} buds.`,
                ephemeral: true
            });
        }

        if (SHOP_ITEMS.plants.includes(item)) {
            if (!userProfile.inventory) userProfile.inventory = [];
            userProfile.inventory.push({
                id: item.id,
                name: item.name,
                acquiredAt: new Date()
            });
            userProfile.balance -= item.cost;
        } else if (SHOP_ITEMS.special_roles.includes(item)) {
            const role = await interaction.guild.roles.fetch(item.roleId);
            if (!role) {
                return await interaction.reply({
                    content: '❌ Error: Role not found. Please contact an administrator.',
                    ephemeral: true
                });
            }

            await interaction.member.roles.add(role);
            userProfile.buds -= item.cost;

            setTimeout(async () => {
                try {
                    const member = await interaction.guild.members.fetch(interaction.user.id);
                    await member.roles.remove(role);
                    await interaction.user.send(`Your "${item.name}" role has expired.`);
                } catch (error) {
                    console.error('Error removing role:', error);
                }
            }, item.duration);
        }

        await userProfile.save();

        const successEmbed = new EmbedBuilder()
            .setColor('#00FF00')
            .setTitle('🛍️ Purchase Successful!')
            .setDescription(`You have purchased ${item.name}!`)
            .addFields(
                { name: 'Cost', value: `${item.cost} ${item.currency}`, inline: true },
                { name: 'Remaining Balance', value: `${item.currency === 'seeds' ? userProfile.balance : userProfile.buds} ${item.currency}`, inline: true }
            );

        await interaction.reply({ embeds: [successEmbed] });

    } catch (error) {
        console.error('Shop purchase error:', error);
        await interaction.reply({
            content: '❌ An error occurred while processing your purchase.',
            ephemeral: true
        });
    }
}