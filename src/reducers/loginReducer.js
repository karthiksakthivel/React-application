export default (state  = {}, action) => {
    switch (action.type) {
     case 'SIMPLE_ACTION':
      return {
        "username":"hruday@gmail.com",
        "password" :'hruday123'
       }
     default:
      return state
    }
   }