// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require(".Employee");

class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern; 