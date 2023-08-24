import { atom, selector } from "recoil";

interface CounterValue {
  plus: number;
  complete: number;
}

export const counterValueState = atom<CounterValue>({
  key: "counterValue",
  default: {
    plus: 2,
    complete: 1391
  }
});

export const countSelector = selector<number>({
  key: "countSelector",
  get: ({ get }) => {
    const counterValue = get(counterValueState);
    const speed = 10;
    const maxCount =
      Math.floor(counterValue.complete / counterValue.plus) * speed;

    return maxCount;
  }
});
