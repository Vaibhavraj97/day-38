let readline =require('readline');
let findFactorial=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

findFactorial.question(' Enter the to find factorial of a number : ',function(factorial){
let fact=parseInt(factorial);
    
    let Sum=1;
        for(let i=1; i<=factNum; i++){
            Sum=Sum*i;
        }
    
    console.log('Factorial of ',factNum,' is ',Sum);
    findFactorial.close();
});