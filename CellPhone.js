import CallingCard from "./CallingCard.js";

class CellPhone {
    constructor(callingCard) {
        this.callingCard = callingCard;
        this.history = "";
        this.activeCall = false;
        this.totalticks = 0;
    }


    isTalking() {
        if (this.activeCall === true) {
            return true;
        }
        return false;
    };

    call(phoneNumber) {
        if (this.activeCall === true) {
            return "A call needs to be ended";
        }
        else {
            this.activeCall = true;
            if (this.history.length > 0) {
                this.history += ", "
            }
            this.history += phoneNumber;
        };
    };

    tick() {
        this.totalticks += 1;
        this.callingCard.useMinutes(1);

        if (this.callingCard.minutes === 0) {
            this.endCall()
        }
    };

    endCall() {
        this.activeCall = false;

        //If calling card minutes is 0 after "ticking", it will end the call and log it to the history
        //and will be pluralized based on the minutes that it elapsed (i.e. 1 minute = minute, 2+ minutes
        //equals minutes)
        if (this.callingCard.minutes === 0) {
            if (this.totalticks === 1) {
                this.history += " (cut of at " + this.totalticks + " minute)";
            }
            else {
                this.history += " (cut of at " + this.totalticks + " minutes)";
            }
        }
        else {
            if (this.totalticks === 1) {
                this.history += " (" + this.totalticks + " minute)";
            }
            else {
                this.history += " (" + this.totalticks + " minutes)";
            }
        }
        this.totalticks = 0;
    };

    getHistory() {
        return this.history;
    };

}


export default CellPhone;