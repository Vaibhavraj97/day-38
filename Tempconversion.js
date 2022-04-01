let readline=require('readline');

let temperatureConversion=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

temperatureConversion.question('Choose 1 for celsius to farenheit and 1 for farenheit to celsius ',function(input){
    temperatureConversion.question('Enter the value to convert ',function(temp){
        let conversion=0;
        let value=parseInt(input);
        let temperature=parseInt(temp);
            switch(value){
                case 1:
                    conversion=(temperature*9/5)+32;
                    console.log(temperature,'celsius : ',conversion,"farenheit");
                    break;
                case 2:
                    conversion=(temperature-32)*5/9;
                    console.log(temperature,'farenheit : ',conversion,"celsius ");
                    break;
                default:
                    console.log('enter proper value');
                    temperatureConversion.close();
            }
            temperatureConversion.close();
    })
})