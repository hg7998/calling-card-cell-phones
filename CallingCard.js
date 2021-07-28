class CallingCard {
    constructor (centsPerMin) {
        this.centsPerMin = centsPerMin;
        this.totalMoneyPaid = 0;
        this.money = 0;
        this.minutes = 0;
    }

addDollars(amount) {
    this.totalMoneyPaid += amount;
    this.money += amount;
    this.minutes = Math.floor(this.money * 100 / this.centsPerMin)
}
  
getRemainingMinutes() {
    return this.minutes;
}

useMinutes(used) {
    if (this.minutes - used <= 0) {
       this.money = 0;
       return this.minutes = 0;
    } 
    else {
       let moneyUsed = ((this.centsPerMin/100)*used);
       this.money -= moneyUsed
       this.minutes -= used;
       return this.minutes;
    } 
}

};

export default CallingCard;