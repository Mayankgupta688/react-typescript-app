import Manager from "../dataStructures/Manager";
import IEmployeeData from "../dataStructures/IEmployeeData";

export default interface IManagingHeirarchy {
  filterEmployees: (filterStr: string) => Manager[];
  getEmployeeHeirarchy: ((filteredData?: IEmployeeData[]) => Manager[]);
  addEmployee: ((emp: IEmployeeData) => Manager[]);
  deleteEmployee: ((employeeDetails: IEmployeeData) => Manager[])
}