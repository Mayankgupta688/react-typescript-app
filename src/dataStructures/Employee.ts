import IEmployee from "./IEmployee";

export default class Employee<T, T1> implements IEmployee {
  public _employeeName: string;
  public _employeeAge: T;
  public _isManager: boolean;
  public _salary: T1;
  public _id: number;
  public _teamMembers: Employee<number, number>[];

  constructor(name: string, age: T, isManager: boolean, salary: T1, id: number) {
    this._employeeAge = age;
    this._employeeName = name;
    this._isManager = isManager;
    this._salary = salary
    this._id = id;
    this._teamMembers = [];
  }

  set salary(salary: T1) {
    this._salary = salary
  }

  public getSalary(): T1 {
    return this.salary;
  }

  set id(id: number) {
    this._id = id;
  }

  get teamMembers(): Employee<number, number>[] {
    return this._teamMembers;
  }

  set teamMembers(teamMembers: Employee<number, number>[]) {
    this._teamMembers = teamMembers;
  }

  get id(): number {
    return this._id;
  }

  public getDetails(): string {
    return this._employeeName;
  }
}