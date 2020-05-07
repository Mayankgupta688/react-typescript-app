import Manager from "./Manager";
import IEmployeeData from "./IEmployeeData";

export default interface IContainerStateProps {
  managerList: Manager[];
  newEmployeeDetails: IEmployeeData;
  filterEmployee: string
}
