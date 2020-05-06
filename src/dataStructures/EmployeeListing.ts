import Manager from "./Manager";
import IEmployeeData from "./IEmployeeData";


class EmployeeListing {

  public managerHierarchy: Manager[];

  constructor() {
    this.managerHierarchy = [];
  }

  getEmployeeHeirarchy(employeeList: IEmployeeData[]) {


    var managerDetails = employeeList.forEach((emp: IEmployeeData) => {
      if(emp.isManager === true) {
        this.managerHierarchy.push(new Manager(emp.name, emp.age, emp.isManager, emp.salary))
      }
    })

    managerDetails.forEach((manager: IEmployeeData) => {
      var teamMembers = employeeList.filter((emp: IEmployeeData) => {
        return emp.managerId == manager.id;
      })

      manager.teamMembers = teamMembers;
    });
  }
}

export default EmployeeListing