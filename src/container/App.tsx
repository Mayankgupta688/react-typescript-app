import * as React from "react";
import axios from "axios";
import employeeDetails from "../data/employeeDetails";
import IEmployeeData from "../dataStructures/IEmployeeData"

class App extends React.Component {
  employeeList: IEmployeeData[];

  constructor(props) {
    super(props);
    this.employeeList = employeeDetails;
  }

  componentDidMount() {
    axios.get("").then(() => {
      // Add code to retrieve data using Ajax...
    })
  }

  render() {
    return (
      <div>
        { this.employeeList.map((employee: IEmployeeData) => {
          return (
            <div>
              <h1>Employee Name: {employee.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
