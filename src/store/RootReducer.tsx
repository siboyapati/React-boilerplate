const initialState = {
  userLoggedIn: false,
  userName: ""
};

export const RootReducer = (state: IState = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

interface IState {
  userLoggedIn: boolean;
  userName: string;
}

interface IAction {
  type: string;
  payload: object;
}
