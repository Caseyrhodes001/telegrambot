let Giftedd = async (m, { Gifted }) => {

    let giftedButtons = [
          [
            { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E' }
        ]
    ];

    Gifted.reply({ text: `Need help? Kindly Consult my Owner: @${global.ownerUsername}\nEspecially incase a Command is not Working` }, giftedButtons, m)
}

Giftedd.command = ['help']
Giftedd.desc = 'Get Help'
Giftedd.category = ['general']

module.exports = Giftedd
