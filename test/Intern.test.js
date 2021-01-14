const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("sets first argument as name property", () => {
        expect(new Intern("Joao").name).toBe("Joao");
    });

    it("sets second argument as email property", () => {
        expect(new Engineer("Joao").email).toBe("joao.intern@example.com");
    });

    it("sets third argument as school property", () => {
        expect(new Engineer("Joao").school).toBe("Universidad de Sao Paulo");
    });

}); 