import $ from 'jquery';
import 'jquery-ui-bundle';
import {
    virtpet
} from "./virtpet";

$(document).ready(function () {
    var pet = new virtpet();
    console.log(pet);
    setInterval(() => {
        $("#petfood").val(pet.food);

        $("#petlife").val(pet.life);

        $("#petenergy").val(pet.energy);

    }, 200);
});