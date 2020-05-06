import Employee from "../dataStructures/Employee";

export default class Manager extends Employee<number, number> {
  
  private _teamSize: number;
  private _teamMembers: Employee<number, number>[];

  constructor(name: string, age: number, isManager: boolean, salary: number, id: number) {
    super(name, age, isManager, salary, id);
    this._teamSize = 0
    this._teamMembers = [];
  }

  get teamSize(): number {
    return this._teamSize;
  }

  set teamSize(size: number) {
    this._teamSize = size;
  }
}