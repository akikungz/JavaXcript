function countString(input,type){
    switch (type.toUpperCase()){
        case "W":
            return input.length
        case "C":
            const vowels = /[aeiou]/gi
            return input.match(vowels).length
        case "V":
            return input.replace(/\s+/g, '').length
        default:
            console.log("None of these choice")
    }
}

console.log(countString("Hello o","w"))

