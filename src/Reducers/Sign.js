export default function sign(state = false, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return [
        ...state,
        {
          currentAdmin: true
        }
      ];
      case 'SIGN_OUT':
        return [
          ...state,
          {
            currentAdmin: false
          }
        ];
    default:
      return state;
  }
}
