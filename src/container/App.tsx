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

        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "20px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                  <label><b>Manager Name:</b> Mayank Gupta</label><br/>
                  <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <>
                  <div className="row">
                    <div className="col-1" style={{paddingLeft: "80px"}}>
                      <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "5px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                    </div>
                    <div className="col-11">
                      <label><b>Employee Name:</b> Anshul Gupta</label><br/>
                      <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                    </div>
                  </div><hr/>
                </>
                <>
                  <div className="row">
                    <div className="col-1" style={{paddingLeft: "80px"}}>
                      <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "5px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                    </div>
                    <div className="col-11">
                      <label><b>Employee Name:</b> Ankit Gupta</label><br/>
                      <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "20px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                  <label><b>Manager Name:</b> Mayank Gupta</label><br/>
                  <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <>
                  <div className="row">
                    <div className="col-1" style={{paddingLeft: "80px"}}>
                      <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "5px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                    </div>
                    <div className="col-11">
                      <label><b>Employee Name:</b> Anshul Gupta</label><br/>
                      <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                    </div>
                  </div><hr/>
                </>
                <>
                  <div className="row">
                    <div className="col-1" style={{paddingLeft: "80px"}}>
                      <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "5px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                    </div>
                    <div className="col-11">
                      <label><b>Employee Name:</b> Ankit Gupta</label><br/>
                      <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "20px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                  <label><b>Manager Name:</b> Aniket Gupta</label><br/>
                  <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <>
                  <div className="row">
                    <div className="col-1" style={{paddingLeft: "80px"}}>
                      <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "5px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                    </div>
                    <div className="col-11">
                      <label><b>Employee Name:</b> Anshul Gupta</label><br/>
                      <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                    </div>
                  </div><hr/>
                </>
                <>
                  <div className="row">
                    <div className="col-1" style={{paddingLeft: "80px"}}>
                      <img style={{height: "50px", width: "50px", "marginRight": "30px", position: "relative", top: "5px"}} src="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg" alt="https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"/>
                    </div>
                    <div className="col-11">
                      <label><b>Employee Name:</b> Ankit Gupta</label><br/>
                      <label style={{position: "relative", left: "-3px"}}><b>Employee Count:</b> 5</label>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
          
        </div>














        { this.employeeList.map((employee: IEmployeeData) => {
          return (
            <div className="container-fluid" style={{height: "200px"}}>
              <div className="row">

                <div className="col-1">
                  <img src={employee.avatar} alt={employee.name}/>
                </div>

                <div>
                  <h1>Employee Name: {employee.name}</h1>
                  <h2>Employee Id: {employee.id}</h2>
                </div>
              </div>
              
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
