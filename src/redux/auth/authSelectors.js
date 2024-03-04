const getToken = state => state.auth.token
const getUserName = state => state.auth.user.name
const isFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const getUserEmail = state => state.auth.user.email;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
    getUserName,
    getUserEmail,
    getToken,
    isFetchingCurrentUser,
    getIsLoggedIn,
  };
  
export default authSelectors;