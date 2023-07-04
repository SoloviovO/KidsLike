export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.email;

export const selectUserScore = state => state.auth.user.balance;

export const selectToken = state => state.auth.token;
