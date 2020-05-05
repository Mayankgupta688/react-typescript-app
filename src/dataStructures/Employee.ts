import IEmployee from "./IEmployee";

export default class Employee<T, T1> implements IEmployee {
  public _employeeName: string;
  public _employeeAge: T;
  public _isManager: boolean;
  public _salary: T1;

  constructor(name: string, age: T, isManager: boolean, salary: T1) {
    this._employeeAge = age;
    this._employeeName = name;
    this._isManager = isManager;
    this._salary = salary
  }

  set salary(salary: T1) {
    this._salary = salary
  }

  public getSalary(): T1 {
    return this.salary;
  }

  public getDetails(): string {
    return this._employeeName;
  }
}