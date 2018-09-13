// keys and _types_ of values
// { count: number } starts at 0
// get an init action first
// state comes in as undefined

// default param
// if (oldState === undefined) {
//   return {
//     count: 0
//   };
// }

// case "INCREMENT":
// return { count: oldState.count + action.amount };
// case "DECREMENT":
// return { count: oldState.count - action.amount };

// case "INCREMENT_3":
// return { count: oldState.count + 3 };
// case "DECREMENT_5":
// return { count: oldState.count - 5 };

// if (action.type === "INCREMENT") {
// WRONG:
// oldState.count += 1
// mutates the old state!
// Right:
// return { count: oldState.count + 1 };
// }
// return oldState;

const reducer = (oldState = { count: 5, textValue: "" }, action) => {
  // console.log("action", action, "state", oldState);
  switch (action.type) {
    case "UPDATE":
      return {
        ...oldState,
        count: oldState.count + action.amount
      };
    case "CHANGE_TEXT":
      return { ...oldState, textValue: action.value };
    default:
      return oldState;
  }
};

export default reducer;
