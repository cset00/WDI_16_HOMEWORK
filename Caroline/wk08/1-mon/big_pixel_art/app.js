setColorBtn = $('.set-color-btn')
container = $('.container')
movieBtn = $('.bg-btn')
movieInput = $('.movie')


setColorBtn.on('click', function(event){
    event.preventDefault()
    console.log('color clicked')
    //change color of 'brush' box to color i specify in input field
})

var createSquares = function (){
    for (var i=0; i<1000; i++){
        var div = $('<div>').addClass('square')
        container.append(div)
    }
}

createSquares()



container.on('mouseover', '.square', function(){
    // $(event.target).addClass('change-color')
    $(event.target).css("background-color", `${$('.color-input').val()}`)
})


movieBtn.on('click', function(event){
    event.preventDefault()
    console.log('movie clicked')

    

    function onSuccess(responseData){
        console.log(responseData)
        container.css("background", `url(${responseData["Poster"]})`)
    }

    $.ajax({
        method: 'GET',
        url: 'http://www.omdbapi.com/?t=' + movieInput.val() + '&apikey=2f6435d9&',
        dataType: 'json'
    }).done(onSuccess)
})


