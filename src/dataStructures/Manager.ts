import Employee from "../dataStructures/Employee";

export default class Manager extends Employee<number> {
  
  private _teamSize: number;
  public teamMembers: Employee<number>[];

  constructor(name: string, age: number, isManager: boolean, salary: number, id: number, avatar: string) {
    super(name, age, isManager, salary, id, avatar);
    this._teamSize = 0
    this.teamMembers = [];
  }
}