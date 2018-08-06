setColorBtn = $('.set-color-btn')
container = $('.container')


setColorBtn.on('click', function(event){
    event.preventDefault()
    console.log('CLICK')
    //change color of 'brush' box to color i specify in input field
})

var createSquares = function (){
    for (var i=0; i<1000; i++){
        var div = $('<div>').addClass('square')
        container.append(div)
    }
}

createSquares()

container.on('click', '.square', function(){
    // $(event.target).addClass('change-color')
    $(event.target).css("background-color", `${$('input').val()}`)
})


