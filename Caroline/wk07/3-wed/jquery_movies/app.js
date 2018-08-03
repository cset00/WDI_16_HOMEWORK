console.log('working')

var movieList = $('.movie-list')
var searchBtn = $('.search-btn')
var results = $('.results')

movieList.on('click','.movie-title', function(event){ 
    var movieTitle = $(event.target).text()
    function onSuccess(responseData){
        window.open('https://www.imdb.com/title/' + responseData["imdbID"])
    
        $.ajax({
            method: 'GET',
            url: 'http://www.omdbapi.com/?t=' + movieTitle + '&apikey=2f6435d9&',
            dataType: 'json'
        }).done(onSuccess)
    }
})


searchBtn.click(function(){
    var input = $('input')
    function onSuccess(responseData) {
        console.log(responseData)
        results.html('')
        for (let i=0;i<responseData["Search"].length;i++){
            p = $('<p>').addClass('movie-title').text(`${responseData["Search"][i]["Title"]}`)
            results.append(p)
        }
    };
    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?s=' + input.val() + '&apikey=2f6435d9&',
        dataType: 'json',
    }).done(onSuccess)
})