console.log('Insult Generator');

// const firstAdjectives = [
//     'artless',
//     'bawdy',
//     'beslubbering',
//     'bootless',
//     'churlish',
//     'cockered',
//     'clouted',
//     'craven',
//     'currish',
//     'dankish',
//     'dissembling',
//     'droning',
//     'errant',
//     'fawning',
//     'fobbing',
//     'froward',
//     'frothy',
//     'gleeking',
//     'goatish',
//     'gorbellied',
//     'impertinent',
//     'infectious',
//     'jarring',
//     'loggerheaded',
//     'lumpish',
//     'mammering',
//     'mangled',
//     'mewling',
//     'paunchy',
//     'pribbling',
//     'puking',
//     'puny',
//     'qualling',
//     'rank',
//     'reeky',
//     'roguish',
//     'ruttish',
//     'saucy',
//     'spleeny',
//     'spongy',
//     'surly',
//     'tottering',
//     'unmuzzled',
//     'vain',
//     'venomed',
//     'villainous',
//     'warped',
//     'wayward',
//     'weedy',
//     'yeasty'
//   ];
//   const secondAdjectives = [
//     'base-court',
//     'bat-fowling',
//     'beef-witted',
//     'beetle-headed',
//     'boil-brained',
//     'clapper-clawed',
//     'clay-brained',
//     'common-kissing',
//     'crook-pated',
//     'dismal-dreaming',
//     'dizzy-eyed',
//     'doghearted',
//     'dread-bolted',
//     'earth-vexing',
//     'elf-skinned',
//     'fat-kidneyed',
//     'fen-sucked',
//     'flap-mouthed',
//     'fly-bitten',
//     'folly-fallen',
//     'fool-born',
//     'full-gorged',
//     'guts-griping',
//     'half-faced',
//     'hasty-witted',
//     'hedge-born',
//     'hell-hated',
//     'idle-headed',
//     'ill-breeding',
//     'ill-nurtured',
//     'knotty-pated',
//     'milk-livered',
//     'motley-minded',
//     'onion-eyed',
//     'plume-plucked',
//     'pottle-deep',
//     'pox-marked',
//     'reeling-ripe',
//     'rough-hewn',
//     'rude-growing',
//     'rump-fed',
//     'shard-borne',
//     'sheep-biting',
//     'spur-galled',
//     'swag-bellied',
//     'tardy-gaited',
//     'tickle-brained',
//     'toad-spotted',
//     'unchin-snouted',
//     'weather-bitten'
//   ];
//   const nouns = [
//     'apple-john',
//     'baggage',
//     'barnacle',
//     'bladder',
//     'boar-pig',
//     'bugbear',
//     'bum-bailey',
//     'canker-blossom',
//     'clack-dish',
//     'clotpole',
//     'coxcomb',
//     'codpiece',
//     'death-token',
//     'dewberry',
//     'flap-dragon',
//     'flax-wench',
//     'flirt-gill',
//     'foot-licker',
//     'fustilarian',
//     'giglet',
//     'gudgeon',
//     'haggard',
//     'harpy',
//     'hedge-pig',
//     'horn-beast',
//     'hugger-mugger',
//     'joithead',
//     'lewdster',
//     'lout',
//     'maggot-pie',
//     'malt-worm',
//     'mammet',
//     'measle',
//     'minnow',
//     'miscreant',
//     'moldwarp',
//     'mumble-news',
//     'nut-hook',
//     'pigeon-egg',
//     'pignut',
//     'puttock',
//     'pumpion',
//     'ratsbane',
//     'scut',
//     'skainsmate',
//     'strumpet',
//     'varlot',
//     'vassal',
//     'whey-face',
//     'wagtail'
//   ];

//   //PSUEDOCODE 

//   // Goal: Print out a randomly-generated insult

//   // 1. Pick a random element from the first array (1st adjective)
     
//   //  ==> how do i pick a random from an array?
//   //       a. generate and store a random number between 0 and length-1 // Math.random()
//   //       b. Use that number as an index into the array, and
//   //       c. store whatever is found at that index

//   // 2. Pick a random element from the second array (2nd adjective)
  
//   // 3. Pick a random element from the third array (n oun)
  
//   // 4. Plug them into a string to print out, i.e. "Thou FIRST SECOND NOUN!"

//   const generateRandomInt = function (maxNum){
//     //const randomInt = Math.floor(Math.random() * maxNum);
//     return Math.floor(Math.random() * maxNum );
//   }; // generateRandomInt

//   const getRandomElementFromArray = function (array) {
//         //input: an array
//         //output: a random element from the array
//         const randomIndex = generateRandomInt(array.length);
//         return array[randomIndex];
//   }; // getRandomElementFromArray

//   const generateInsult = function () {

//       const firstAdjectiveTerm = getRandomElementFromArray( firstAdjectives );
//       const secondAdjectiveTerm = getRandomElementFromArray( secondAdjectives );
//       const nounTerm = getRandomElementFromArray(nouns);
    
//       console.log(`Thou ${firstAdjectiveTerm} ${secondAdjectiveTerm} ${nounTerm}!`)

//   }; // generateInsult
 
//     // starting point of program execution (running the function). All the above is setting it up to run.
//     //start of the debugger here
//     generateInsult();



const insultsObject = {

    firstAdjectives: [
        'artless',
        'bawdy',
        'beslubbering',
        'bootless',
        'churlish',
        'cockered',
        'clouted',
        'craven',
        'currish',
        'dankish',
        'dissembling',
        'droning',
        'errant',
        'fawning',
        'fobbing',
        'froward',
        'frothy',
        'gleeking',
        'goatish',
        'gorbellied',
        'impertinent',
        'infectious',
        'jarring',
        'loggerheaded',
        'lumpish',
        'mammering',
        'mangled',
        'mewling',
        'paunchy',
        'pribbling',
        'puking',
        'puny',
        'qualling',
        'rank',
        'reeky',
        'roguish',
        'ruttish',
        'saucy',
        'spleeny',
        'spongy',
        'surly',
        'tottering',
        'unmuzzled',
        'vain',
        'venomed',
        'villainous',
        'warped',
        'wayward',
        'weedy',
        'yeasty'
    ],

    secondAdjectives: [
        'base-court',
        'bat-fowling',
        'beef-witted',
        'beetle-headed',
        'boil-brained',
        'clapper-clawed',
        'clay-brained',
        'common-kissing',
        'crook-pated',
        'dismal-dreaming',
        'dizzy-eyed',
        'doghearted',
        'dread-bolted',
        'earth-vexing',
        'elf-skinned',
        'fat-kidneyed',
        'fen-sucked',
        'flap-mouthed',
        'fly-bitten',
        'folly-fallen',
        'fool-born',
        'full-gorged',
        'guts-griping',
        'half-faced',
        'hasty-witted',
        'hedge-born',
        'hell-hated',
        'idle-headed',
        'ill-breeding',
        'ill-nurtured',
        'knotty-pated',
        'milk-livered',
        'motley-minded',
        'onion-eyed',
        'plume-plucked',
        'pottle-deep',
        'pox-marked',
        'reeling-ripe',
        'rough-hewn',
        'rude-growing',
        'rump-fed',
        'shard-borne',
        'sheep-biting',
        'spur-galled',
        'swag-bellied',
        'tardy-gaited',
        'tickle-brained',
        'toad-spotted',
        'unchin-snouted',
        'weather-bitten' 
    ],

    nouns: [
        'apple-john',
        'baggage',
        'barnacle',
        'bladder',
        'boar-pig',
        'bugbear',
        'bum-bailey',
        'canker-blossom',
        'clack-dish',
        'clotpole',
        'coxcomb',
        'codpiece',
        'death-token',
        'dewberry',
        'flap-dragon',
        'flax-wench',
        'flirt-gill',
        'foot-licker',
        'fustilarian',
        'giglet',
        'gudgeon',
        'haggard',
        'harpy',
        'hedge-pig',
        'horn-beast',
        'hugger-mugger',
        'joithead',
        'lewdster',
        'lout',
        'maggot-pie',
        'malt-worm',
        'mammet',
        'measle',
        'minnow',
        'miscreant',
        'moldwarp',
        'mumble-news',
        'nut-hook',
        'pigeon-egg',
        'pignut',
        'puttock',
        'pumpion',
        'ratsbane',
        'scut',
        'skainsmate',
        'strumpet',
        'varlot',
        'vassal',
        'whey-face',
        'wagtail' 
    ],

    generateRandomInt: function (maxNum){
        //const randomInt = Math.floor(Math.random() * maxNum);
        return Math.floor(Math.random() * maxNum );
    }, // generateRandomInt

    getRandomElementFromArray:function (array) {
        //input: an array
        //output: a random element from the array
        const randomIndex = this.generateRandomInt(array.length);
        return array[randomIndex];
    }, // getRandomElementFromArray

    generateInsult: function () {

    const firstAdjectiveTerm = this.getRandomElementFromArray( this.firstAdjectives );
    const secondAdjectiveTerm = this.getRandomElementFromArray( this.secondAdjectives );
    const nounTerm = this.getRandomElementFromArray(this.nouns);
  
    console.log(`Thou ${firstAdjectiveTerm} ${secondAdjectiveTerm} ${nounTerm}!`)
    }, // generateInsult

}; // insultsObject

    insultsObject.generateInsult();
    // 