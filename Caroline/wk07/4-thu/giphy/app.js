console.log('hello')

var searchBtn = $('.search-btn')
var results = $('.container')
var searchBar = $('.search-bar')
var number = 0

searchBtn.click(function(){
    
    function onSuccess(responseData) {
        console.log(responseData)
        results.html('')
        for (let i=0;i<responseData["data"].length;i++){
            href = `${responseData["data"][i]["images"]["fixed_height"]["url"]}`
            img = $('<img>').attr("src", href)
            results.append(img)
        }
    }
    $.ajax({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?q=' + searchBar.val() + '&api_key=2PJzovJQxTppU9ePAOacPJIYhgiCst03',
        dataType: 'json',
    }).done(onSuccess)
})


$(window).scroll(function () { 
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
        console.log('SCROLLINGGGG')
        number = number + 25
        
        function onSuccess(responseData) {
            for (let i=0;i<responseData["data"].length;i++){
                
                href = `${responseData["data"][i]["images"]["fixed_height"]["url"]}`
                img = $('<img>').attr("src", href)
                results.append(img)
            }
        }
        
        $.ajax({
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/search?q=' + searchBar.val() + '&offset=' + number + '&api_key=2PJzovJQxTppU9ePAOacPJIYhgiCst03',
            dataType: 'json',
        }).done(onSuccess)
    }
 })