import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { employeeDataAction } from './actions/employeeAction';
import { Table } from 'react-bootstrap';
function EmpTable(props) {
  let {user} = props.employeeReducer;
   useEffect(()=>{props.employeeAction()},[]);
   let employeeGrid;
   if(user){
    employeeGrid = user.map((value)=> {
        return (<tr>
    <td>{value.id}</td>
    <td>{value.name}</td>
    <td>{value.age}</td>
    <td>{value.gender}</td>
    <td>{value.email}</td>
    <td>{value.phoneNo}</td>
      </tr>)
    })
   }
  return (
    <div className="App">
      <div className="grid">
        {props.employeeReducer.user ?
      (
      <div className="container">
          <span className="gridHeading">
            Employee details
          </span>
        <Table size="lg" variant="dark" responsive striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
{employeeGrid} 
 </tbody>
</Table>
      </div>)
      : ''}
</div>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
 })
const mapDispatchToProps = dispatch => ({
    employeeAction: () => dispatch(employeeDataAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(EmpTable);
