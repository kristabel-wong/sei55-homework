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


// const generateRandomInt = function( maxNum ){
//     return Math.floor( Math.random()* maxNum);

// };
//  const getRandomElementFromArray = function (array){
//     const randomIndex = generateRandomInt( array. length);
//     return array[ randomIndex];
//  };
// const generateInsut = function(){
//     const firstAdjectivesTerm = getRandomElementFromArray(firstAdjectives);
//     const secondAdjectivesTerm = getRandomElementFromArray(secondAdjectives); 
//     const nounTerm = getRandomElementFromArray( nouns ); 
//     console.log(`Thou ${firstAdjectivesTerm} ${secondAdjectivesTerm} ${nounTerm}`);
// }
// // debugger;
// generateInsut()

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
  nouns:  [
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
  generateRandomInt:  function( maxNum ){
    return Math.floor( Math.random()* maxNum);

  },
   getRandomElementFromArray: function (array){
    const randomIndex = generateRandomInt( array. length);
    return array[ randomIndex];
 },
  generateInsut: function(){
    
    const firstAdjectivesTerm = getRandomElementFromArray(firstAdjectives);
    const secondAdjectivesTerm = getRandomElementFromArray(secondAdjectives); 
    const nounTerm = getRandomElementFromArray( nouns ); 
    console.log(`Thou ${firstAdjectivesTerm} ${secondAdjectivesTerm} ${nounTerm}`);

  },


};

insultObject.generateInsut()

//  const firstAdjectivesTerm = getRandomElementFromArray(firstAdjectives);


// const randomFirstIndex = generateRandomInt(firstAdjectives.length);
   
//   const firstAdjectivesTerm = firstAdjectives[randomFirstIndex];

  
//   const randomFirstIndex = Math.floor(Math.random() * firstAdjectives.length);
   
//   const firstAdjectivesTerm = firstAdjectives[randomFirstIndex];
  
//   console.log(firstAdjectivesTerm);

  
//   const randomSecondIndex = Math.floor(Math.random() * secondAdjectives.length);
   
//   const secondAdjectivesTerm = secondAdjectives[randomSecondIndex];
  
// //   console.log(secondAdjectivesTerm);


//   const randomThirdIndex = Math.floor(Math.random() * nouns.length);
   
//   const nounTerm = nouns[randomThirdIndex];
  
// //   console.log(nounTerm);


// console.log(`Thou ${firstAdjectivesTerm} ${secondAdjectivesTerm} ${nounTerm}`);


