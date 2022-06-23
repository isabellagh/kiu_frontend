const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'FETCH_userS':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
