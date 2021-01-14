const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("sets first argument as name property", () => {   
        expect (new Employee ("Ximena").name).toBe("Auricia");
});

    it("sets second argument as email property", () => {
        expect (new Employee ("Ximena").email).toBe("ximena.employee@example.com");
    })

}); 
