
export default function LoginReducer(state={login:0, payload:[]}, action) {

  switch (action.type) {
    case 'loginData' :

      return Object.assign({},{typeOfUser:action.typeOfUser,login:action.login, payload:action.payload});
    default:
        return state;
  }


}
