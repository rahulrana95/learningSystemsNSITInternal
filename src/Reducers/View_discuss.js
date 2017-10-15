
export default function View_discuss(state={ payload:[]}, action) {

  switch (action.type) {
    case 'view_discuss' :

      return Object.assign({},{payload:action.payload});
    default:
        return state;
  }


}
