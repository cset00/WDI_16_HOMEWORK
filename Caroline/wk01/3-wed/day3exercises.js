console.log('day3exercises yo');

// OBJECTS

//------The Recipe Card

var recipe = {
        title: "Mole",
        servings: 2,
        ingredients: ['cinnamon', 'cumin','cocoa']
    }    

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients: ')
for (var i=0; i<recipe.ingredients.length;i++){
    console.log(recipe.ingredients[i]);
}


//------The Reading List

var book = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        alreadyRead: false
    },
    {
        title: '1984',
        author: 'George Orwell',
        alreadyRead: true
    },
    {
        title: 'Annihilation',
        author: 'Jeff VanderMeer',
        alreadyRead: false 
    }
]

for (var j=0; j<book.length; j++){
    if(book[j].alreadyRead===true){
        console.log('You already read ' + book[j].title + ' by ' + book[j].author);
    } else {
        console.log('You still need to read ' + book[j].title + ' by ' + book[j].author);
    }
}

//------The Movie Database

var faveMovie = {
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie','Living Sneezes']
}

var toPrint = faveMovie.title + ' lasts for ' + faveMovie.duration + ' minutes. Stars: ' + faveMovie.stars[0] + ', ' + faveMovie.stars[1] + ', ' + faveMovie.stars[2] + '.';
console.log(toPrint);
