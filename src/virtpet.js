export class virtpet {

    constructor(name, level, difficulty) {
        this.active = true;
        this.level = ((level == undefined) ? 1 : level);
        this.difficulty = ((difficulty == undefined) ? 1 : difficulty);
        this.name = ((name == undefined) ? "cactuardo" : name);
        this.food;
        this.maxfood;
        this.strength;
        this.speed;
        this.money;
        this.working = false;
        this.energy;
        this.worktime = 0;
        this.foodrate = 30 - (difficulty >= 0 ? 0 : difficulty * 5);
        this.hungerrate = .1 * difficulty;
        this.totalworktime = 0;
        this.wages = 1;
        this.worktimer = 0;
        this.payday = false;
        this.week = 7;
        this.foodstock = 0;
        this.animations = [];
        this.time = 0;
        var i = 1;
        this.mainthread = setInterval(() => {
            this.Tick();
            if(i == 1){
                console.log("Tick!");
                i++;
            }
                else if(i == 2){
                console.log("Tock!");
            i--;

            }}, 100);
            
    }
    Tick() {
        this.ParseStats();
        this.Work();
        console.log(this.time);
        if (this.time == 7) {
            this.totalworktime += this.worktimer;
            this.money += this.wages * this.worktimer;
            this.payday = false;
            this.time = 0;
            console.log("New week!");
        }   
        this.time++;
        
    }
Needs(){

    
}
    ParseStats() {
        this.maxfood = 100 + (parseInt((this.level * 5) * Math.PI) - (parseInt(this.difficulty * 3) * Math.PI));
        this.maxenergy = 100 + (parseInt((this.level * 3) * Math.PI) - (parseInt(this.difficulty * 3) * Math.PI));
        this.maxlife = 100 + (parseInt((this.level * 6) * Math.PI) - (parseInt(this.difficulty * 3) * Math.PI));
        this.strength = (this.level * parseInt(this.worktime * Math.PI));
        this.wages = (strength / 2) ;
    }
    FillEnergy() {
        this.energy = this.maxenergy;
    }
    FillHunger() {
        this.food = this.maxfood;
    }
    Feed() {
        if(this.foodstock > 0){
            this.hunger += this.foodrate;
            this.foodstock--;
        }
    }
    Togglewake() {
        this.active = false;
    }
    ToggleWork() {
        this.working = true;
    }
}