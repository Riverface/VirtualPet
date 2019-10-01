import { virtpet } from "../src/VirtPet";

describe ( "The Pet", function(){
    let cactuardo = new virtpet();
    beforeEach(function() {
        jasmine.clock().install();
      });
    
      afterEach(function() {
        jasmine.clock().uninstall();
      });

    it("will initialize properly",function(){

    expect(cactuardo.name).toBe("cactuardo");
    expect(cactuardo.difficulty).toBe(1);
    expect(cactuardo.level).toBe(1);
    
        console.log(cactuardo);
        
    });
    it("Can work",function(){
        cactuardo.ToggleWork();
        console.log(cactuardo.working);
        console.log(cactuardo.workflag);
        cactuardo.working = true;
        jasmine.clock().tick(300000);

        console.log(cactuardo);
        console.log(cactuardo.workflag);
        expect(cactuardo.worktime).toBeGreaterThan(0);
        cactuardo.timescale = 0.25;

    });

});