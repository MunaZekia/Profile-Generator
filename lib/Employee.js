class Employee {
    constructor(name, ID, email,) {
        this.name = name
        this.ID = ID
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.ID
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;

// const employee1 = new Employee();
// console.log(employee1.name);