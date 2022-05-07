export const initialState: DarkMode = {color: true};

const general = (
  state: DarkMode = initialState,
  action: DarkModeChange,
): DarkMode => {
  let {type} = action;
  switch (type) {
    case 'GET_DARK_MODE_PREFERENCE':
      return {
        color: action.color == 'dark',
      };
    default:
      return state;
  }
};

export default general;
