import {
  virtpet
} from "../src/VirtPet";
describe("The Pet", function () {
  let cactuardo = new virtpet();
  beforeEach(function () {
    jasmine.clock().install();
  });
  afterEach(function () {
    jasmine.clock().uninstall();
  });
  it("will initialize properly", function () {
    expect(cactuardo.name).toBe("cactuardo");
    expect(cactuardo.difficulty).toBe(1);
    expect(cactuardo.level).toBe(1);
  });
  it("Can work", function () {
    jasmine.clock().tick(60);
    cactuardo.ToggleWork();
    console.log(cactuardo.working);
    console.log(cactuardo);
    console.log(cactuardo.totalworktime);
    expect(cactuardo.totalworktime).toBeGreaterThan(0);
  });

});