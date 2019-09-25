import { virtpet } from "../src/VirtPet";

describe ( "The Pet", function(){
var cactuardo = new virtpet();
    it("will initialize properly",function(){
    expect(cactuardo.name).toBe("cactuardo");
    expect(cactuardo.difficulty).toBe(1);
    expect(cactuardo.level).toBe(1);
        console.log(cactuardo);
    });
});