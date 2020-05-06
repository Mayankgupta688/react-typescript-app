import * as React from "react";
import axios from "axios";
import employeeDetails from "../data/employeeDetails";
import EmployeeListing from "../dataStructures/EmployeeListing";
import Manager from "../dataStructures/Manager";

interface StateProps {
  managerList: Manager[];
}

class App extends React.Component <any, StateProps> {
  empListing: EmployeeListing;

  constructor(props) {
    super(props);
    this.empListing = new EmployeeListing();
    this.state = {
      managerList: this.empListing.getEmployeeHeirarchy(employeeDetails)
    }
  }

  componentDidMount() {
    axios.get("").then(() => {
      // Add code to retrieve data using Ajax...
    })
  }

  render() {
    return (
      <div>
        <div className="accordion" id="accordionExample">
          {this.state.managerList.map(manager => {
            return (
              <>
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#emp_" + manager.id.toString()} aria-expanded="true" aria-controls="collapseOne">
                        <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "20px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                        <label><b>Manager Name: </b>{manager.employeeName}</label><br/>
                        <label style={{position: "relative", left: "-5px"}}><b>Employee Count:</b> {manager.teamMembers.length}</label>
                      </button>
                    </h2>
                  </div>

                  

                  <div id={"emp_" + manager.id.toString()} className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">

                      {manager.teamMembers.map(team => {
                        return (
                          <>
                            <div className="row">
                              <div className="col-1" style={{paddingLeft: "80px"}}>
                                <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "5px"}} src={team.avatar} alt={team.employeeName} />
                              </div>
                              <div className="col-11">
                                <label><b>Employee Name:</b> {team.employeeName}</label><br/>
                                <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                              </div>
                            </div><hr/>
                          </>
                        )
                      })}
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
