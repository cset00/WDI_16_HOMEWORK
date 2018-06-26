console.log('PT Planner attempt 2')

var trainLines = [
    {
        lineName: 'Alamein',
        stations: 'Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie'.split(', ')
    },
    {
        lineName: 'Glen Waverley',
        stations: 'Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong, Tooronga'.split(', ')
    },
    {
        lineName: 'Sandringham',
        stations: 'Southern Cross, Richmond, South Yarra, Prahran, Windsor'.split(', ')
    }
]

//Probs could just have one function for isValid..
// Take input for origin/destination & the prompt message?
// var isValid = function(){
//     if (trainLines[0].stations.includes(origin) === false){
//         if (trainLines[1].stations.includes(origin) === false){
//             if (trainLines[2].stations.includes(origin) === false){
//                 origin = prompt('SORRY TRY AGAIN - ORIGIN')
//                 isValid()
//             }
//         }
//     }
// }

// var isValid2 = function(){
//     if (trainLines[0].stations.includes(destination) === false){
//         if (trainLines[1].stations.includes(destination) === false){
//             if (trainLines[2].stations.includes(destination) === false){
//                 destination = prompt('SORRY TRY AGAIN - DESTINATION')
//                 isValid2()
//             }
//         }
//     }
// }

var isValid = function(start,promptMessage){
    if (trainLines[0].stations.includes(start) === false){
        if (trainLines[1].stations.includes(start) === false){
            if (trainLines[2].stations.includes(start) === false){
                start = prompt(promptMessage)
                isValid(start,promptMessage)
            }
        }
    }
}

//var origin = 'Windsor'
var origin = prompt('please enter your station of origin')
isValid(origin,'SORRY TRY AGAIN - ORIGIN')
 
//var destination = 'Richmond'
var destination = prompt('please enter your destination station')
isValid(destination,'SORRY TRY AGAIN - DESTINATION')

var originLine
var destinationLine

for (var a=0; a<trainLines.length; a++){
    if (trainLines[a].stations.indexOf(origin)>=0){
        originLine = trainLines[a]
    }
}

for (var b=0; b<trainLines.length; b++){
    if (trainLines[b].stations.indexOf(destination)>=0){
        destinationLine = trainLines[b]
    } 
}

var printDeets = function(journey){
    console.log('origin: ' + journey[0])
    console.log('destination: ' + journey[journey.length-1] + '\n')
    console.log(journey.join(' -----> ') + '\n')
    console.log(journey.length-1 + ' stops total')
}

if (originLine === destinationLine){
    var line = originLine
    
    if (line.stations.indexOf(origin)>line.stations.indexOf(destination)){
        line = line.stations.reverse()
    }

    var originIndex = line.indexOf(origin)
    var destinationIndex = line.indexOf(destination)
    var newJourney = line.slice(originIndex,destinationIndex+1)

    printDeets(newJourney)
    
} else {

    var toRichmond = originLine.stations
    var fromRichmond = destinationLine.stations

    if (toRichmond.indexOf(origin)>toRichmond.indexOf('Richmond')) {
        toRichmond = originLine.stations.reverse()
        //console.log('reversing the originLine')
    }
        
    var originIndex = toRichmond.indexOf(origin)
    var firstLeg = toRichmond.slice(originIndex,toRichmond.indexOf('Richmond'))
    //console.log('normal originLine')
        
    if (fromRichmond.indexOf(destination)<fromRichmond.indexOf('Richmond')){
        fromRichmond = destinationLine.stations.reverse()
        //console.log('reversing destinationLine')
    }
    
    var destinationIndex = fromRichmond.indexOf(destination)
    var secondLeg = fromRichmond.slice(fromRichmond.indexOf('Richmond'),destinationIndex+1)
    
    var newJourney = firstLeg.concat(secondLeg)
    //console.log('normal destinationLine')
    printDeets(newJourney)
} 

// how to add additional stations. push.
// create addStation function
// specify line
// and then station
var findLine = function (lineToFind){
    for (var x=0; x<trainLines.length; x++){
        if(trainLines[x].lineName === lineToFind){
            return trainLines[x]
        }
    }
}

var addStation = function(lineToFind,stationToAdd){
    findLine(lineToFind).stations.push(stationToAdd)
    console.log(findLine(lineToFind))
}

