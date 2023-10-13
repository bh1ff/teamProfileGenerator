// TODO: Write code to define and export the Employee class
class Employee {

    constructor (name, id, email){
        this.name = name;  // this is a property of an object that we can access with dot notation or bracket notation
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;