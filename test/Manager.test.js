const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("sets first argument as name property", () => {
        expect(new Manager("Tayhana").name).toBe("Tayhana");
    });

    it("sets second argument as email property", () => {
        expect(new Manager("Tayhana").email).toBe("tayhana.manager@example.com");
    });

    it("sets third argument as office number", () => {
        expect(new Manager("Tayhana").officeNumber).toBe("4");
    });

}); 
