//5번 문제

let user = {
  name: "예린",
  part: "FE",
};

const json = JSON.stringify(user);
console.log(typeof json);
console.log(json);

//const json1 = JSON.stringify(json);

//const json2 = JSON.parse(json);
const json2 = JSON.parse(json);
console.log(typeof json2);
console.log(json2);