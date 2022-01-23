import { INCREASEORREDUCE } from "../Types/typesBurger";

export const incrOrReduce = (index, act) => {
  return {
    type: INCREASEORREDUCE,
    index,
    act,
  };
};
