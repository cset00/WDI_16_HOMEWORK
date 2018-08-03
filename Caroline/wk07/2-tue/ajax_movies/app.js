console.log('working')
// var movieList = document.querySelector('.movie-list')

var searchBtn = document.querySelector('.search-btn')
var results = document.querySelector('.results')

movieList.addEventListener('click', function(){
    
    if (event.target.classList.contains('movie-title')) {
        console.log('eyo movie title clicked')
        var movieTitle = event.target.textContent

        function onSuccess(responseData){
            window.open('https://www.imdb.com/title/' + responseData["imdbID"])

        }
    
        $.ajax({
            method: 'GET',
            url: 'http://www.omdbapi.com/?t=' + movieTitle + '&apikey=2f6435d9&',
            dataType: 'json'
        }).done(onSuccess)

    }
})


searchBtn.addEventListener('click', function(){
    var input = document.querySelector('input')
    
    function onSuccess(responseData) {
        console.log(responseData)
        results.innerHTML = ''

        for (let i=0;i<responseData["Search"].length;i++){
            // create element p
            // set p text content to movie title
            // apend p to results
            
            p = document.createElement('p')
            p.textContent = responseData["Search"][i]["Title"]
            p.classList.add('movie-title')
            results.appendChild(p)
        }
        

    };

    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?s=' + input.value + '&apikey=2f6435d9&',
        dataType: 'json',
    }).done(onSuccess)

})