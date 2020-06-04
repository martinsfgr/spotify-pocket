export const authCallbackSuccess = (credentials) => ({
  type: 'AUTH_CALLBACK_SUCCESS',
  payload: credentials
})

export const authCallbackError = (error) => ({
  type: 'AUTH_CALLBACK_ERROR',
  payload: error
})
