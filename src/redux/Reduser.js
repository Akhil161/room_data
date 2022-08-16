const initailState = [];

export const saveReduce = (state = initailState, action) => {
  switch (action.type) {
    case "save":
      return [...state, action.payload];

    default:
      return [...state];
  }
};
