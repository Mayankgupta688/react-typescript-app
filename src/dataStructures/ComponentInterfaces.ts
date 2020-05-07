import Manager from "./Manager";
import IEmployeeData from "./IEmployeeData";

export default interface ContainerStateProps {
  managerList: Manager[];
  newEmployeeDetails: IEmployeeData;
  filterEmployee: string
}
