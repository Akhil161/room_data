const initailState = [];

export const saveReduce = (state = initailState, action) => {
  switch (action.type) {
    case "save":
      return [...state, action.payload];

    case "update":
      let updateD = action.payload;
      let newData = state.map((e) => {
        if (e.roomId === updateD.roomId) {
          return action.payload;
        } else {
          return e;
        }
      })
      return [...newData];

    default:
      return [...state];
  }
};
