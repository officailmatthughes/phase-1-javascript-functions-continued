// code your solution here
function saturdayFun(funPhrase = "roller-skate") {
    return `This Saturday, I want to ${funPhrase}!`;
}

function mondayWork(nextPhrase = "go to the office") {
    return `This Monday, I will ${nextPhrase}.`
}

function wrapAdjective(adj = "*") {
    return function (newPhrase) {
        return `You are ${adj}${newPhrase}${adj}!`
    }
}