const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("sets first argument as name property", () => {
        expect(new Engineer("Julieta").name).toBe("Julieta");
    });

    it("sets second argument as email property", () => {
        expect(new Engineer("Julieta").email).toBe("julieta.engineer@example.com");
    });

    it("sets third argument as GitHub username", () => {
        expect(new Engineer("Julieta").github).toBe("julietx");
    });

}); 