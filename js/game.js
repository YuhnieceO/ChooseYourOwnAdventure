// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Do You Want to Be a Billionaire",
            choices: [
                {
                    text: "YES",
                    nextLevel: "money",
                },

                {
                    text: "NAW",
                    nextLevel: "field",
                },
            ]
        },

        money: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "YOU JUST GAINED $100,000",
            choices: [
                {
                    text: "Spend dat bihh",
                    nextLevel: "brokie",
                },
                
                {
                    text: "Invest it",
                    nextLevel: "investments",
                },
            ]
        },
        
        brokie: {
            message: "Damnnn Now You a Broke Bum :( ",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        field: {
            message: "So You Wanna Be a Loserrrr?? GO Make Some Money Moves !",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        investments: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "PICK YOUR POISON",
            choices: [
                {
                    text: "STOCKS",
                    nextLevel: "stocks",
                },
                
                {
                    text: "PROPERTY",
                    nextLevel: "property",
                },
            ]
        },
        
        stocks: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "PICK YOUR POISON",
            choices: [
                {
                    text: "SNAPCHAT",
                    nextLevel: "sc.bio",
                },
                
                {
                    text: "NORDSTROMS",
                    nextLevel: "nord.bio",
                },
                
                {
                    text: "AMGEN",
                    nextLevel: "amg.bio",
                },
                
                {
                    text: "NETFLIX",
                    nextLevel: "net.bio",
                },
                
                {
                    text: "CARVANA",
                    nextLevel: "car.bio",
                },
            ]
        },

    }
};
