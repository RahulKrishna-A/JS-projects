console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let curren = {
    USD : 1,
    JPY : 113.5,
    EUR : 0.89,
    RUB : 74.36,
    GBP : 0.75
}
const input = require('sync-input');

function cnvrt(from, to, amnt){
    let a = ((curren[to]/curren[from])*amnt).toFixed(4);

    console.log(`Result: ${amnt} ${from} equals ${a} ${to}`);

};
let frm,to_cur,amount;
let a1,a2;
console.log("What do you want to convert?");
frm = input("From:").toUpperCase();
//to_cur = input("To:").toUpperCase();

if((frm=="USD" || frm=="JPY" || frm=="EUR" || frm=="RUB" || frm=="GBP")) {
    to_cur = input("To:").toUpperCase();
    if(to_cur=="USD" || to_cur=="JPY" || to_cur=="EUR" || to_cur=="RUB" || to_cur=="GBP") {
        amount = input("Amount:");

        if(isNaN(amount)){
            console.log("The amount has to be a number");

        }else {
            if ((amount) < 1) {
                console.log("The amount cannot be less than 1");
            } else {
                cnvrt(frm, to_cur, amount);
            }
        }
    }else{
        console.log("Unknown currency");
    }
}else{
    console.log("Unknown currency");
}

