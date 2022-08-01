// console.log(`Insults!`)

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

// //  PSEUDOCODE

// // Goal: Print out a randomly generated insult

// // 1. pick a random element from the first array (first adj)

// // -> How do I pick a random element from an array?
// //      a. Generate and store a random number betwixt 0 .. length -1
// //      b. Use that number as an index into the array, and
// //      c. Store whatever is found at that index


// const generateRandomInt = function (maxNum) {
//     return Math.floor( Math.random() * maxNum )
// } 

// const getRandomElementFromArray = function (array) {
//     // input: an array
//     // output: a random element from the array
//     const randomIndex = generateRandomInt( array.length )
//     return array[ randomIndex ]
// }

// const generateInsult = function() {

// const firstAdjTerm = getRandomElementFromArray(firstAdjectives);

// const secondAdjTerm = getRandomElementFromArray(secondAdjectives);

// const nounTerm = getRandomElementFromArray(nouns);

// console.log(`Thou ${firstAdjTerm} ${secondAdjTerm} ${nounTerm}!`)

// } //generateInsult


//Starting point of program execution

// debugger; //start the debugger here


// Global vars:

const insultObject = {

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
  nouns:[
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

  generateRandomInt : function (maxNum) {
    return Math.floor( Math.random() * maxNum )
},

  getRandomElementFromArray : function (array) {
    // input: an array
    // output: a random element from the array
    const randomIndex = this.generateRandomInt( array.length )
    return array[ randomIndex ]
},

  generateInsult : function() {
    const firstAdjTerm = this.getRandomElementFromArray(this.firstAdjectives);
    const secondAdjTerm = this.getRandomElementFromArray(this.secondAdjectives);
    const nounTerm = this.getRandomElementFromArray(this.nouns);
    console.log(`Thou ${firstAdjTerm} ${secondAdjTerm} ${nounTerm}!`)
    
},  // generate random insult

} // insultObject


insultObject.generateInsult()