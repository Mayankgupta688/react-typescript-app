import Manager from "./Manager";
import IEmployeeData from "./IEmployeeData";
import Employee from "./Employee";


class EmployeeListing {

  public managerHierarchy: Manager[];

  constructor() {
    this.managerHierarchy = [];
  }

  getEmployeeHeirarchy(employeeList: IEmployeeData[]) {

    employeeList.forEach((emp: IEmployeeData) => {
      if(emp.isManager === true) {
        this.managerHierarchy.push(new Manager(emp.name, emp.age, emp.isManager, emp.salary, emp.id, emp.avatar))
      }
    })

    this.managerHierarchy.forEach((manager: Manager) => {
      employeeList.forEach((emp: IEmployeeData) => {
        if(emp.managerId === manager.id) {
          manager.teamMembers.push(new Employee(emp.name, emp.age, false, emp.salary, emp.id, emp.avatar))
        }
        
      });
    });

    return this.managerHierarchy;
  }
}

export default EmployeeListing