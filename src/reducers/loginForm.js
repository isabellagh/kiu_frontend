const initialState = {
  email: '',
  password: '',
};

const loginForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return action.formData;
    case 'CLEAR_LOGIN_FORM':
      return initialState;
    default:
      return state;
  }
};

export default loginForm;
