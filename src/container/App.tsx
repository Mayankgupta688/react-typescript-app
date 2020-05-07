import * as React from "react";
import ManagingHeirarchy from "../dataStructures/ManagingHeirarchy";
import IEmployeeData from "../dataStructures/IEmployeeData";
import IContainerStateProps from "../dataStructures/IComponentInterfaces";
import axios from "axios";


class App extends React.Component <any, IContainerStateProps> {
  managingHeirarchy: ManagingHeirarchy;
  newEmployeeDetails: IEmployeeData;

  constructor(props) {
    super(props);
    this.managingHeirarchy = new ManagingHeirarchy();
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.updateNewEmployeeDetails = this.updateNewEmployeeDetails.bind(this);
    this.filterEmployees = this.filterEmployees.bind(this);
    this.updateFilterText = this.updateFilterText.bind(this);
    
    this.newEmployeeDetails = {
      id: -1,
      name: "",
      age: 0,
      salary: 0,
      designation: "",
      isManager: false,
      managerId: -1,
      avatar: ""
    };

    this.state = {
      managerList: this.managingHeirarchy.getEmployeeHeirarchy(),
      newEmployeeDetails: this.newEmployeeDetails,
      filterEmployee: ""
    }
  }

  resetEmployeeForm() {
    this.newEmployeeDetails = {
      id: -1,
      name: "",
      age: 0,
      salary: 0,
      designation: "",
      isManager: false,
      managerId: -1,
      avatar: ""
    };
  }

  deleteEmployee(empDetails) {
    var updatedEmployeeList = this.managingHeirarchy.deleteEmployee(empDetails)
    this.setState({
      managerList: updatedEmployeeList
    })
  }

  updateNewEmployeeDetails(event) {
    this.setState({
      newEmployeeDetails: {
        ...this.state.newEmployeeDetails,
        [event.target.id]: event.target.value
      }
    })
  }

  addEmployee() {
    var data = this.managingHeirarchy.addEmployee(this.state.newEmployeeDetails);
    console.dir(data)
    this.setState({
      managerList: data,
      filterEmployee: "",
      newEmployeeDetails: this.newEmployeeDetails
    })
  }

  updateFilterText(event) {
    this.setState({
      ...this.state,
      filterEmployee: event.target.value
    }, () => {
      this.filterEmployees()
    })
  }

  filterEmployees() {
    this.setState({
      ...this.state,
      managerList: this.managingHeirarchy.filterEmployees(this.state.filterEmployee)
    })
  }

  render() {
    return (
      <div>

        <div className="row" style={{marginLeft: "20px", marginTop: "20px"}}>

          <div className="form-group col-4">
            <label>Filter Employee:</label>
            <input type="text" id="age" value={this.state.filterEmployee} onChange={this.updateFilterText} className="form-control" aria-describedby="emailHelp" />
          </div><br/>

        </div>
        <div className="accordion" id="addNewEmployee" style={{marginBottom: "20px"}}>
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <b>Add New Employee</b>
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#addNewEmployee">
              <div className="card-body">
                <div>

                  <div className="form-group">
                    <label>Employee Name</label>
                    <input type="text" id="name" value={this.state.newEmployeeDetails.name} onChange={this.updateNewEmployeeDetails} className="form-control" aria-describedby="emailHelp" />
                  </div>

                  <div className="row">

                    <div className="form-group col-4">
                      <label>Employee Age</label>
                      <input type="text" id="age" value={this.state.newEmployeeDetails.age}  onChange={this.updateNewEmployeeDetails} className="form-control" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group col-4">
                      <label>Employee Salary</label>
                      <input type="number" id="salary" value={this.state.newEmployeeDetails.salary} onChange={this.updateNewEmployeeDetails} className="form-control" />
                    </div>

                    <div className="form-group col-4">
                      <label>Employee Designation</label>
                      <input type="text" id="designation" value={this.state.newEmployeeDetails.designation} onChange={this.updateNewEmployeeDetails} className="form-control" />
                    </div>

                  </div>

                  <div className="row">
                    <div className="form-group col-6">

                      <label>Manager Id</label>
                      <select className="form-control" value={this.state.newEmployeeDetails.managerId} id="managerId" onChange={this.updateNewEmployeeDetails} >
                        {this.state.managerList.map(manager => {
                          return <option value={manager.id}>{manager.employeeName}</option>
                        })}
                      </select>
                    </div>

                    <div className="form-group col-6">
                      <label>Employee Avatar</label>
                      <input type="text" value={this.state.newEmployeeDetails.avatar}  id="avatar" onChange={this.updateNewEmployeeDetails} className="form-control"/>
                    </div>
                  </div>

                  <button type="button" onClick={this.addEmployee} className="btn btn-primary">Submit</button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="accordion" id="accordionExample">
          {this.state.managerList.map(manager => {
            return (
              <>
                <div className="card">
                  <div className="card-header" id={"manager_" + manager.id}>
                    <h2 className="mb-0">
                      <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#emp_" + manager.id.toString()} aria-expanded="true" aria-controls="collapseOne">
                        <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "20px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                        <label style={{color: "red"}}><b>Manager Name: </b>{manager.employeeName} (Id: {manager.id})</label><br/>
                        <label style={{position: "relative", left: "-25px", color: "red"}}><b>Employee Count:</b> {manager.teamMembers.length}</label>
                      </button>
                    </h2>
                  </div>
                  <div id={"emp_" + manager.id.toString()} className="  show" aria-labelledby={"emp_" + manager.id} data-parent="#accordionExample">
                    <div className="card-body" style={{paddingLeft: "2rem"}}>
                      <div className="accordion" id={"accordion_" + manager.id}>
                        {manager.teamMembers.map(team => {
                          return (
                            <>
                              <div className="card">
                                <div className="card-header" id={"employee_" + team.id}>
                                  <h2 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#emp_" + team.id.toString()} aria-expanded="true" aria-controls="collapseOne">
                                      <label><b>Employee Name: </b>{team.employeeName} (Salary: {team.salary})</label><br/>
                                    </button>
                                  </h2>
                                </div>

                                <div id={"emp_" + team.id.toString()} className="collapse" aria-labelledby={"employee_" + team.id} data-parent={"#accordion_" + manager.id}>
                                  <div className="card-body">
                                    <div className="row">
                                      <div style={{paddingLeft: "80px", display: "inline-block"}}>
                                        <img style={{height: "190px", width: "190px", "marginRight": "30px", position: "relative", top: "5px", display: "inline-block"}} src={team.avatar} alt={team.employeeName} />
                                      </div>
                                      <div style={{paddingLeft: "30px", display: "inline-block"}}>
                                        <label><b>Employee Name:</b> {team.employeeName}</label><br/>
                                        <label style={{position: "relative"}}><b>Employee Salary:</b> {team.salary}</label><br/>
                                        <label style={{position: "relative"}}><b>Employee Id:</b> {team.id}</label><br/>
                                        <label style={{position: "relative"}}><b>Employee Designation:</b> {team.salary}</label><br/>
                                        <label style={{position: "relative"}}><b>Employee Age:</b> {team.employeeAge}</label><br/>
                                        <button type="button" className="btn btn-danger" onClick={() => this.deleteEmployee(team)}>Delete</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
