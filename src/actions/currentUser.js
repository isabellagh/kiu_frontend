// sync action creators
export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user,
  };
};

// async action creators

export const login = (credentials, history) => {
  console.log('credentials are', credentials);
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          console.log(user);
        } else {
          dispatch(setCurrentUser(user));
          // dispatch(getMyClients())
          // dispatch(clearLoginForm())
          // history.push('/profile')
        }
      })
      .catch(console.log);
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/get_current_user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        if (resp.error) {
          console.log('getCurrentUser', resp);
        } else {
          dispatch(setCurrentUser(resp.data));
          // dispatch(getMyClients())
        }
      })
      .catch((error) => console.log(error));
  };
};
