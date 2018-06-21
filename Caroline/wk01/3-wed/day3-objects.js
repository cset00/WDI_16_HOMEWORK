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
// ^ Alternatively, instead of using the for loop, there's a quicker way.
// console.log('recipe.ingredients.join('\n')).
// join is to return a string from an array. if we had numbers in the array, it'll get converted into one string. 
// \n is to put a break between lines.
// split is to break a string into an array. need to specify where to break it.



//------The Reading List

var books = [
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

for (var j=0; j<books.length; j++){
    if(books[j].alreadyRead===true){
        console.log('You already read ' + books[j].title + ' by ' + books[j].author);
    } else {
        console.log('You still need to read ' + books[j].title + ' by ' + books[j].author);
    }
}

// ^ Naming convention: If you have a list with more than 1 items, it's a good idea to use
// PLURAL. eg. books instead of book.

// 'if(books[j].alreadyRead===true)' can also be written just as 'if(books[j].alreadyRead)'


//------The Movie Database

var faveMovie = [{
    title: 'Puff the Magic Dragon',
    duration: 30,
    stars: ['Puff', 'Jackie','Living Sneezes']
},
{
    title: 'blabla',
    duration: 13,
    stars: ['bo', 'jack','horseman']
}
]

//var toPrint = faveMovie.title + ' lasts for ' + faveMovie.duration + ' minutes. Stars: ' + faveMovie.stars[0] + ', ' + faveMovie.stars[1] + ', ' + faveMovie.stars[2] + '.';
//console.log(toPrint);

// See below on how to create a function to print the movie details

var movieInfo = function(movie) { // parameter
    return movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars.join(', ');
}

console.log(movieInfo(faveMovie[0]));

