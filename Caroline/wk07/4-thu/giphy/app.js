console.log('hello')

var searchBtn = $('.search-btn')
var results = $('.container')
var searchBar = $('.search-bar')
var offset = 0

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
        url: 'http://api.giphy.com/v1/gifs/search',
        data: {
            q: searchBar.val(),
            offset: offset,
            api_key: '2PJzovJQxTppU9ePAOacPJIYhgiCst03'
        },
        dataType: 'json',
    }).done(onSuccess)
})


$(window).scroll(function () { 
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
        console.log('SCROLLINGGGG')
        offset = offset + 25
        
        function onSuccess(responseData) {
            for (let i=0;i<responseData["data"].length;i++){
                
                href = `${responseData["data"][i]["images"]["fixed_height"]["url"]}`
                img = $('<img>').attr("src", href)
                results.append(img)
            }
        }
        
        $.ajax({
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/search?q=' + searchBar.val() + '&offset=' + offset + '&api_key=2PJzovJQxTppU9ePAOacPJIYhgiCst03',
            dataType: 'json',
        }).done(onSuccess)
    }
 })

 $('.back-to-top').click(function(){
    document.scrollingElement.scrollTo({top:0, behavior: 'smooth'})
 })