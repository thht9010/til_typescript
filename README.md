# 객체(`{}`)와 배열(`[]`)의 반복문

## 1. 배열의 반복문
- for 문

```js
const arr = [1, 2, 3, 4];
for(let i = 0; i < arr.lengt; i ++){
  console.log(arr[i]); // 1, 2, 3, 4
}
```

- forEach

```js
const arr = [1, 2, 3, 4];
arr.forEach( function(요소, 인덱스, 원본배열) {
  console.log(요소); // 1, 2, 3, 4
});
arr.forEach((요소, 인덱스, 원본배열) => {
  console.log(요소); // 1, 2, 3, 4
});
// 아래 구문이 많이 사용 됩니다.
arr.forEach((요소, 인덱스) => {
  console.log(요소); // 1, 2, 3, 4
});
arr.forEach((item, index) => {
  console.log(index); // 0, 1, 2, 3
  console.log(item); //  1, 2, 3, 4
})
```

- map: 원본 배열에서 새로운 배열을 더한다. (별표 10만개)

```js
const arr = [1, 3, 5, 2];
arr.map(function(요소, 인덱스, 원본배열) {});
arr.map((요소, 인덱스, 원본배열) => {});
// 아래처럼 주요 사용됩니다.
const resultArr = arr.map((요소, 인덱스) => {
  return 요소 + 1; // 2, 4, 6, 3
})
```

```js
const arr = [10, 20, 11, 24];
const resultArr = arr.map( (intem, index) => {
  return `<div class="box">${item}</div>`;
});
```

- for in 구문 : (가능하면 사용하지마세요. 객체를 사용하세요.)



## 2. 객체의 반복문

- for in 구문

```js
for(key in obj) {
  console.log(key);
  console.log(obj[key]);
};
```

### 3. 정리 (우리가 필수로 알아야 함)

- for
- 배열.map
- 배열.forEach
- for (키 in 객체)

# 값을 추출해서 보관하기 (별 10만개)

## 1. `배열`의 값을 뽑아서 보관하기

```js
const arr = [3, 7, 2, 1];
console.log(c); // 바나나
```

-`Spread 문법`으로 2개의 배열을 하나로 합치기


```js
const arr = ["사과", "딸기", "바나나"];
const resultArr = [5, ...arr, 3, 7, 1];

// Rest 파라메타
function 함수(...rest) {
  console.log(rest); // [1, 2, 3]
}
함수(1, 2, 3);
```

## 2. `객체`의 값을 뽑아서 보관하기(별 100만개)

```js
const obj = {age: 20, job: "개발자", city: "대구"};
const a = obj.age;
const b = obj.job;
const c = obj.["city"];
// 객체 구조 분해 할당 (DeStructuring)
const { a, b, c } = obj;
```

