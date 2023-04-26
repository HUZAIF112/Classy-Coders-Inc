class Employees {
    #salary
    #isHired = true
    static #allEmployees= []
    static #totalpayroll = 0
    constructor(name,position,salary){
        this.name = name
        this.position = position
        this.#salary = salary
        Employees.#allEmployees.push(this);
        Employees.#totalpayroll += salary

    }
    getSalary(){
        return this.#salary
    }

    setSalary(amount){
        this.#salary = amount

    }
    getStatus(){
        return this.#isHired
    }
    setStatus(command){
        if( command == 'fire'){
            this.#isHired = false
        }
    }
    static getEmployees(){
        return this.#allEmployees
    }
    static getTotalPayroll(){
        return Employees.#totalpayroll
        }
     
    }

    

module.exports = {
    Employees
}