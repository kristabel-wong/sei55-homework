// console.log(`dictionary`)

const dictionary = {
  
  definitions: {
    method: 'a function which lives in an object (i.e a function which is the value of an object key)',
    scope: 'the visibility of a variable within a program, i.e. the section of code within which a variable can be accessed',
    'variadic function': 'a function which can accept a varying number of arguments from one call to the next',
    arity: 'the number of arguments a function accepts',

  },
  
  
  
  
  



  lookupTerm: function(term){
      term = term.toLowerCase();
     
      if (term in this.definitions) {
        console.log(`${term} = ${ this.definitions[term]   }`);
      } else {
        console.log(`Sorry, '${term}'is not in the dictionary.`);
      }
  
  
  
  
  
    },
    
    printAllDefinitions: function(){

        for ( const key in this.definitions ){
            // console.log(key, this.definitions[key]);
            this.lookupTerm( key );
            termCount++;
        } //for-in

        console.log(`Total entries: ${ termCount}`);
    },

    addDefinition: function(term, definitions){
       term = term.toLowerCase();

       if( term in this.definitions){
        console.log(`This term is already defined.`);
       }esle{
        this.definitions
       }

    }

};

