import Manager from "./Manager";
import IEmployeeData from "./IEmployeeData";
import Employee from "./Employee";
import employeeDetails from "../data/employeeDetails";
import IManagingHeirarchy from "../dataStructures/IManagingHeirarchy";


class ManagingHeirarchy implements IManagingHeirarchy {

  public managerHierarchy: Manager[];
  public employeeList: IEmployeeData[];

  constructor() {
    this.managerHierarchy = [];
    this.employeeList = employeeDetails
  }

  filterEmployees(filterStr: string): Manager[] {
    var filteredEmployees = this.employeeList.filter((emp: IEmployeeData) => {
      if(emp.isManager === true) {
        return true;
      }
      return (emp.name.indexOf(filterStr) > -1 && emp.isManager === false)
    });

    var filteredList = this.getEmployeeHeirarchy(filteredEmployees)

    return filteredList;
  }

  getEmployeeHeirarchy(filteredData?: IEmployeeData[]): Manager[] {
    this.managerHierarchy = [];

    var employeeList = (filteredData && filteredData.length) ? filteredData: this.employeeList;

    employeeList.forEach((emp: IEmployeeData) => {
      if(emp.isManager === true) {
        this.managerHierarchy.push(new Manager(emp.name, emp.age, emp.isManager, emp.salary, emp.id, emp.avatar))
      }
    })

    this.managerHierarchy.forEach((manager: Manager) => {
      employeeList.forEach((emp: IEmployeeData) => {
        if(emp.managerId.toString() === manager.id.toString()) {
          manager.teamMembers.push(new Employee(emp.name, emp.age, false, emp.salary, emp.id, emp.avatar))
        }
        
      });
    });

    return this.managerHierarchy;
  }

  addEmployee(emp: IEmployeeData): Manager[] {

    var maxValue = -1;

    this.employeeList.forEach(employee => {
      if(employee.id > maxValue) {
        maxValue = employee.id
      }
    });
    
    emp.id = maxValue + 1;
    this.employeeList.push(emp);
    return this.getEmployeeHeirarchy()
  }

  deleteEmployee(employeeDetails: IEmployeeData): Manager[] {
    this.employeeList = this.employeeList.filter(emp => emp.id !== employeeDetails.id)
    return this.getEmployeeHeirarchy();
  }
}

export default ManagingHeirarchy