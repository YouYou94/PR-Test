const AFunction = ({ a, b }) => {
  return a + b;
};

const BFunction = ({ a, b }) => {
  return a - b;
};

const CFunction = ({ a, b }) => {
  return a * b;
};

const value_01 = 10;

const value_02 = 12;

console.log(`value_01 과 value_02의 합 : ${AFunction(value_01, value_02)}`);

console.log(`value_01 과 value_02의 차 : ${BFunction(value_01, value_02)}`);

console.log(`value_01 과 value_02의  곱 : ${CFunction(value_01, value_02)}`);
