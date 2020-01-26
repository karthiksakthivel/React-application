export const employeeDataAction = (callbackFunc) => dispatch => {
    dispatch({
     type: 'EMPLOYEE_ACTION',
     callbackFunc,
    })
   }