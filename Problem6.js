// 6번 문제

const arr = [{ part: "fe", name: "새연", age: 22},
{ part: "fe", name: "명묵", age: 25},
{ part: "fe", name: "지후", age: 23},
{ part: "staff", name: "나현", age: 24}];

  //staff만 배열에서 지우기
  let FE = arr.filter((arr) => arr.part !== "staff")
  console.log(FE);
  
  //age 순으로 내림차순 정렬
  let ages = FE.sort((a,b) => b.age - a.age);
  console.log(ages); 

  //part를 key로 가지는 vaule들만 대문자로 
  let upper = ages.map(item => ({ ...item, part: item.part.toUpperCase()}));
  console.log(upper);