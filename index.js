function findMatching(array, string){
    let filteredArray = array.filter(function(name){
        return string.toLowerCase() === name.toLowerCase()
    })
    return(filteredArray)
}

function fuzzyMatch(drivers, string){
    console.log(drivers)
    console.log(string)
    let filteredArray = drivers.filter(function(name){
        return name.toLowerCase().indexOf(string.toLowerCase()) === 0
    })
    console.log(filteredArray)
    return(filteredArray)
}

function matchName(drivers, string){
    console.log(drivers)
    console.log(string)
    let filteredArray = drivers.filter(function(object){
        return object.name === string 
    })
return(filteredArray)
}