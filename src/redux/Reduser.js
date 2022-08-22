const initailState = [];

export const saveReduce = (state = initailState, action) => {
  switch (action.type) {
    case "save":
      return [...state, action.payload];

    case "update":
      let updateD = action.payload;
      let filterData = state.filter((e) => {
        return e.roomId != updateD.roomId;
      });
      return [...filterData, action.payload];

    default:
      return [...state];
  }
};
