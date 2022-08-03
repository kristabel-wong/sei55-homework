console.log('Dictionary');


const dictionary = {
    
    definitions: {

        method: 'a function which lives in an object (i.e. a function which is the value of an object key)',
        scope: 'the visibility of a variable within a program, i.e. the section of code within which a variable can be accessed',
        "variadic function": 'a function which can accept a varying number of arguments from one call to the next',
        arity: 'the number of arguments a function accepts - relating to variadic functions'

    },
   

    lookupTerm: function( term ) {

        term = term.toLowerCase();

        if( this.definitions[term] !== undefined) {
            console.log(`${ term } = ${ this.definitions[term] }`);
        } else {
            // Not found (i.e. value of key is undefined)
            console.log(`Sorry, '${term}' is not in the dictionary.`);
        }

    },

    printAllDefinitions: function(){

        // TODO: list definitions in alphabetical order

        let termsCount = 0;

        for ( const key in this.definitions ) {
            //console.log(key, this.definitions[key]);
            this.lookupTerm( key );
            termsCount++;
        } //for-in

        console.log(`Total entries: ${termsCount}`);

    },

    addDefinition: function (term, definition) {

        term = term.toLowerCase();

        if (term in this.definitions) {
            console.log(`This term is already defined.`);
            this.lookupTerm( term );
        } else {
            
            this.definitions[term] = definition;
            console.log(`Term added.`);
        }
        
            this.lookupTerm ( term );

     },

     removeDefinition: function ( term ) {

     },

     searchAllDefinitions: function ( ) {

     }

}; // dictionary



