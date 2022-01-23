import { INCREASEORREDUCE } from "../Types/typesBurger";

const burgerState = {
  topping: [
    { name: "Salad", amount: 0, price: 10 },
    { name: "Cheese", amount: 0, price: 20 },
    { name: "Beef", amount: 0, price: 55 },
  ],
};
const burgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case INCREASEORREDUCE: {
      let toppingUpdate = [...state.topping];
      if (action.act) {
        toppingUpdate[action.index].amount++;
      } else {
        if (toppingUpdate[action.index].amount > 0) {
          toppingUpdate[action.index].amount--;
        }
      }
      state.topping = [...toppingUpdate];
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default burgerReducer;
