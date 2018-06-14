const salaryOperations = {
    salary:0,
    takeSalary(salary){
        this.salary = salary;
    },
    hra(){
        return this.salary * 0.30;
    },
    da(){
        return this.salary * 0.20;
    },
    ta(){
        return this.salary * 0.30;
    },
    pf(){
        return this.salary * 0.05;
    },
    gs(){
        return this.salary + this.hra() + this.da() + this.ta() - this.pf();
    },
    tax(){
        return this.gs() * 0.10;
    },
    ns(){
        return this.gs() - this.tax();
    }
}