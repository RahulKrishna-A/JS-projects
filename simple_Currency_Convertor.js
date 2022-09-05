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

while(true){
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`)
    let condt = input();
    if(condt == 1){
        while(true){
            console.log("What do you want to convert?");
            frm = input("From:").toUpperCase();
            if((frm=="USD" || frm=="JPY" || frm=="EUR" || frm=="RUB" || frm=="GBP")) {
                to_cur = input("To:").toUpperCase();
                if(to_cur=="USD" || to_cur=="JPY" || to_cur=="EUR" || to_cur=="RUB" || to_cur=="GBP") {
                    amount = input("Amount:");

                    if(isNaN(amount)){
                        console.log("The amount has to be a number");
                        continue;

                    }else {
                        if ((amount) < 1) {
                            console.log("The amount cannot be less than 1");
                            continue;
                        } else {
                            cnvrt(frm, to_cur, amount);
                            break;
                        }
                    }
                }else{
                    console.log("Unknown currency");
                    continue;
                }
            }else{
                console.log("Unknown currency");
                continue;
            }


        }

    }else if(condt == 2) {
        console.log("Have a nice day!");
        break;

    }else {
        console.log(`Unknown input`);
        continue;

    }

}



