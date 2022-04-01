let readline =require("readline");
let findPower=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

findPower.question(" Enter the number to get power of 2 : ",function(power){
    let value=parseInt(power);
        for(let i=0;i<=value;i++){
            console.log(Math.pow(2,i));
        }
    powerOfTwo.close();
});