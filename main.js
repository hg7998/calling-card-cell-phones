import CallingCard from "./CallingCard.js";
import CellPhone from "./CellPhone.js";


let card = new CallingCard(20);
card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added

let phone = new CellPhone(card);
phone.call("555-1111");
phone.tick();       // 1 minute elapsed
phone.tick();       // 2 minutes elapsed
phone.endCall();

phone.call("555-3333");
phone.tick();       // 3 minutes elapsed
phone.tick();       // 4 minutes elapsed
phone.tick();       // this is the end of the 5th minute, so the call is ended

phone.getHistory(); // => returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"

card.getRemainingMinutes() // => returns 0, because all 5 minutes have been used up
console.log(phone);

//let phone2 = new CellPhone(card);
console.log("minutes: " + card.minutes);
card.addDollars(1); // add 100 cents @ 20 cents/minute = 5 minutes added
console.log("minutes: " + card.minutes);
phone.call("555-4444");
phone.tick();       // 1 minute elapsed
phone.tick();       // 2 minutes elapsed
//phone.tick();       // 2 minutes elapsed
phone.tick();       // 2 minutes elapsed
console.log("ticks: " + phone.totalticks);
phone.endCall();

phone.call("555-5555");
console.log("ticks: " + phone.totalticks);
phone.tick();       // 3 minutes elapsed
//phone.endCall();
console.log("ticks: " + phone.totalticks);
console.log("minutes: " + card.minutes);

phone.getHistory(); // => returns "555-1111 (2 minutes), 555-3333 (cut of at 3 minutes)"

card.getRemainingMinutes() // => returns 0, because all 5 minutes have been used up
console.log(phone);
phone.tick();
console.log(phone);
console.log("remainingminutes: " + card.getRemainingMinutes())
