function main( number) {
    for(;number !== 0;number --){
        var string = ""
        if(number%3 === 0){
            string += "fizz";
        }
        string += " ";
        if(number%5 ===0){
            string += "buzz";
        }
        if(string.length ===1){
            console.log(number)
        }else console.log(string.trim());
    }
}
main(30);