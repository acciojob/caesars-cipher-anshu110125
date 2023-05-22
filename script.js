console.log("abc" + "kmz") // abckmz

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M', '?': '?', ',': ','
};
function encode(inputString){
    let decoderArr = [];
    for(let i = 0 ; i < inputString.length ; i++) {
        if(lookup[ inputString[i] ] === undefined){
            decoderArr.push( inputString[i] ) ;
        }   
        else{ 
            decoderArr.push(lookup[ inputString[i] ]);
        }
    }
    return decoderArr
}


console.log(lookup["V"]);
console.log(encode("#MNZD"));