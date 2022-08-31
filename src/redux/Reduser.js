const initailState = [];

export const saveReduce = (state = initailState, action) => {
  switch (action.type) {

    case "load":
          // let arr=action.payload;
          // console.log(arr);
          // let arr1=state;
          // console.log("before",arr1);
          // arr1.concat(arr)
          // console.log(arr1);
      return [...state,...action.payload]
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
