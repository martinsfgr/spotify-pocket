const INITIAL_STATE = {
  accessToken: '',
  expirationTime: '',
  expiresIn: '',
  isLogged: false,
  tokenType: ''
}

const authReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case 'AUTH_CALLBACK_SUCCESS':
      return {
        ...state,
        accessToken: payload.accessToken,
        expirationTime: new Date().getTime() + parseInt(payload.expiresIn),
        expiresIn: payload.expiresIn,
        isLogged: true,
        tokenType: payload.tokenType,
      }
    
    case 'AUTH_CALLBACK_ERROR':
      return {
        ...state,
        accessToken: '',
        errorMessage: payload,
        expiresIn: '',
        isLogged: false,
        tokenType: '',
      }

    default:
      return state 
  }
}

export default authReducer;
