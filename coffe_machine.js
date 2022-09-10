const input = require('sync-input');
coffee =  120;
milk = 540;
water = 400;
money = 550;
cups = 9;
brke = 0;
let addw, addm, addco, addcu, coffeeopt;


function display() {
    console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffee} g of coffee beans
${cups} disposable cups
$${money} of money`);


}

function check(amnt, chkamnt, type) {
    if(chkamnt > amnt) {
        console.log(`Sorry, not enough ${type}!`);
        brke = 1;
    }

}



function makecoffee(w, m, c, mone) {
    check(water, w , "water");
    check(milk, m , "milk");
    check(coffee, c , "coffee beans");
    check(cups, 1, "disposable cups");

    if(brke === 0) {
        console.log("I have enough resources, making you a coffee!");
        water -= w;
        coffee -= c;
        milk -= m;
        cups -= 1;
        money += mone;

    }
}


//display();

outerloop:
    while(true) {
        brke = 0;
        console.log(`\nWrite action (buy, fill, take, remaining, exit):`);
        let option = input();

        switch (option) {
            case "fill" :
                console.log(`\nWrite how many ml of water you want to add:`);
                addw = Number(input());
                console.log(`Write how many ml of milk you want to add: `);
                addm = Number(input());
                console.log(`Write how many grams of coffee beans you want to add:`);
                addco = Number(input());
                console.log(`Write how many disposable cups you want to add: `);
                addcu = Number(input());
                water += addw;
                coffee += addco;
                milk += addm;
                cups += addcu;
                break;

            case "take" :
                console.log(`I gave you $${money}`);
                money = 0;
                break;

            case "buy" :
                console.log(`\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4- customize your own coffee, 5- back - to main menu:`);
                coffeeopt = (input());
                if(coffeeopt == "1") {
                    makecoffee(250,0,16, 4);
                } else if(coffeeopt == "2") {
                    makecoffee(350,75,20, 7);
                } else if(coffeeopt == "3") {
                    makecoffee(200, 100, 12, 6);
                } else if(coffeeopt == "5") {
                    continue;
                } else if (coffeeopt == "4") {
                    console.log("welcome to customize your coffee, here you can choose the exact ingredients of the coffee as your choice " +
                        "customized coffee costs $10");
                    let wt = input("\nenter the amount of water(ml) you want to add to your coffee");
                    let mlk = input("enter the amount of milk(ml) you want to add to your coffee");
                    let cf = input("enter the amount of coffee beans(g) you want to add to your coffee");
                    makecoffee(wt,mlk,cf);

                }
                break;

            case "remaining" :
                display();
                break;

            case "exit" :
                break outerloop;

            default :
                console.log("please choose one of the available option");
        }

    }
