import $ from 'jquery';
import 'jquery-ui-bundle';
import {
    virtpet
} from "./virtpet";
import 'bootstrap';
import './styles.css';
$(document).ready(function () {
    let pet = new virtpet();

    $("#togglework").click(function () {
        pet.ToggleWork();
    });
    $("#kill").click(function(){
    pet.life = 0;
    });
    $("#debuglife").click(function(){
    pet.life = pet.maxlife;
    });
    var pagethread = setInterval(() => {
        $("#petfood").val(pet.food);
        
        $("#petfoodreadout").text(pet.food + " / " + pet.maxfood);
        if (!pet.workflag && !pet.working) {
            $("#workstatus").text("idle");
        }
        if (!pet.workflag && pet.working) {
            $("#workstatus").text("Clocking out at the end of the hour...");
        }
        if (pet.workflag && pet.working) {
            $("#workstatus").text("working...");

        }
        if (pet.workflag && !pet.working) {
            $("#workstatus").text("getting ready for work...");

        }
        if (pet.workflag) {
            $("#togglework").text("Stop");

        }
        if (!pet.workflag) {
            $("#togglework").text("Work");

        }


        if (pet.food == pet.maxfood) {
            $("#feedpet").text("Can't, full");
        } else {
            $("#feedpet").text("feed");
        }

        if (pet.active) {
            $("#sleepwake").text("Sleep");
        } else {
            $("#sleepwake").text("Wake");
        }
        $("#petlife").val(pet.life);
        $("#petlifereadout").text(`${pet.life} / ${pet.maxlife}`);
        $("#petenergy").val(pet.energy);
        $("#petenergyreadout").text(` ${pet.energy} / ${pet.maxenergy}`);
        $("#worktime").html(`time spent working: </br>${pet.worktime} this week, <br> ${pet.totalworktime} in ${pet.name}'s lifetime`);
        $("#petstrength").text(`${pet.strength} strength`);
        $("#petspeed").text(`${pet.speed}  speed`);
        $("#petwages").text(`${pet.wages} $ per hour `);
        $("#money").text(`${pet.money}$ in wallet`);
        $("#totaltime").html(pet.time);
    }, 10);
});