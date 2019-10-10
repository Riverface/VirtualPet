export class virtpet {

    constructor(name, level, difficulty) {
        this.active = true;
        this.level = ((level == undefined) ? 1 : level);
        this.difficulty = ((difficulty == undefined) ? 1 : difficulty);
        this.name = ((name == undefined) ? "cactuardo" : name);
        this.time = '';
        this.food = 0;
        this.foodstock = 0;
        this.maxfood = 0;
        this.maxlife = 0;
        this.maxenergy = 0;
        this.strength = 0;
        this.money = 0;
        this.working = false;
        this.energy = 0;
        this.foodrate = 1;
        this.hungerrate = 1;
        this.worktimer = 0;
        this.payday = false;
        this.animations = [];
        this.totalticks = 0;
        this.seconds = 0;
        this.minute = 0;
        this.hour = 0;
        this.day = 0;
        this.week = 0;
        this.month = 0;
        this.year = 0;
        this.decade = 0;
        this.foodprice = 1;
        this.speed = 1;
        this.worktime = 0;
        this.totalworktime = 0;
        this.wages = 1;
        this.week = 0;
        this.time = 0;
        this.sleeping = false;
        this.eating = false;
        this.workflag = false;
        this.working = false;
        this.tickrate = 1;
        this.eatingticks = 0;
        this.mainthread = setInterval(() => {
            for(var trate = 0; trate < this.tickrate; trate++){
            this.Tick();
            }
        }, 1);

    }
    Tick() {
        if (this.totalticks == 0) {

            this.FirstParse();
        }
        this.ParseStats();
        if(this.eatflag){
        this.eatingticks = this.totalticks;
        this.eating = true;
        }

        this.totalticks++;
        this.seconds++;
        if (this.seconds == 60) {
            if(this.eating){
                this.eatflag = false;
                this.food += this.foodrate;
            if(this.totalticks == this.eatingticks + (60 * 20)){
                this.eating = false;
            }
    
            }
            this.minute++;
            this.seconds = 0;
            if (this.minute >= 60) {
                this.hour++;
                this.minute = 0;
                this.food -= this.hungerrate;
                console.log(this.minute);
                if (this.working) {
                    console.log("Cactuardo is working!");
                    this.worktime++;
                    this.totalworktime++;
                    if (this.energy > 0) {
                        this.energy-= 2.5;
                    } else {
                        this.life--;
                    }
                }

                if(this.sleeping){
                this.energy += 5;
                }
                else{
                    if (!this.working) {
                        this.energy--;
                    }
                }
                if (this.workflag == true) {

                    this.working = true;

                } else if (this.workflag == false) {
                    this.working = false;
                }

                if (this.food == 0) {
                    this.life -= this.hungerrate;
                }

                if (this.hour >= 24) {

                    this.day++;
                    this.hour = 0;
                    if (this.day == 7) {
                        this.money += (this.worktime * this.wages);
                        this.worktime = 0;
                        this.week++;
                        this.day = 0;

                        if (this.week >= 4) {
                            this.month++;
                            this.week = 0;
                            if (this.month >= 12) {
                                this.year++;
                                this.month = 0;
                                if (this.year == 10) {
                                    this.year = 0;
                                    this.decade++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    BuyFood(amount) {
        this.money - (amount * (5 * this.difficulty));
        this.foodstock++;
    }
    FirstParse() {
        this.ParseStats();
        this.energy = this.maxenergy;
        this.food = this.maxfood;
        this.life = this.maxlife;
        this.foodrate = 1;
        this.hungerrate = 1 * this.difficulty;
    }
    ParseStats() {
        this.maxfood = 100 + (parseInt((this.level * 5) * Math.PI) - (parseInt(this.difficulty * 3)));
        this.maxenergy = 100 + (parseInt((this.level * 3) * Math.PI) - (parseInt(this.difficulty * 3)));
        this.maxlife = 100 + (parseInt((this.level * 6) * Math.PI) - (parseInt(this.difficulty * 3)));
        this.strength = ((this.level * 1) + parseInt(this.totalworktime / Math.PI));
        this.wages = (parseFloat((this.strength * this.speed) * .05).toPrecision(1));
        this.time = `${this.decade} decades,</br> ${this.year} years,</br> ${this.month} months,</br> ${this.week} weeks, ${this.day} days, </br> ${this.hour} hours,</br> ${this.minute} minutes,</br> ${this.seconds} seconds, </br> ${this.totalticks} ticks`;
        this.foodprice = (this.difficulty * (this.foodstock / 2));
    }
    FillEnergy() {
        this.energy = this.maxenergy;
    }
    FillHunger() {
        this.food = this.maxfood;
    }
    Feed() {
        if (this.foodstock > 0) {
            this.hunger += this.foodrate;
            this.foodstock--;
        }
    }

    Togglewake() {
        if (!this.sleeping) {
            this.sleeping = true;
        } else {
            this.sleeping = false;
        }
    }
    ToggleWork() {
        if (this.workflag) {
            this.workflag = false;
        } else {
            this.workflag = true;
        }
    }
}