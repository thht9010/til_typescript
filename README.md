# Scope (범위)

- 변수가 살아남는 범위
- 변수를 찾아서 사용할 수 있는 범위

## 1. Scope 종류

- `전역` 스코프 : 코드에서 어디에서든 접근 및 사용 가능 (`var`, let, const)
- `지역` 스코프 : `function` 또는 `{}` 안쪽에서만 사용가능
- `블록` 스코프 : `{}` 블록 안에서만 사용가능(if, for 등에서 let, const)

## 2. 전역 스코프 간단예제

- 코드 어디서나 사용 할 수 있는 범위

```js
let message = "안녕"; // 전역 스코프
function sayHello() {
  console.log(message);
}
sayHello();
```

```ts
let message: string = "안녕"; // 전역 스코프
function sayHello(): void {
  console.log(message);
}
const sayHello = (): void => {
  console.log(message);
};
sayHello();
```

## 3. 지역스코프 (로컬 범위)

```js
function SayHello() {
  let message = "안녕";
  console.log(message);
}
sayHello();
```

```ts
function SayHello(): void {
  let message: string = "안녕";
  console.log(message);
}
const SayHello = (): void => {
  let message: string = "안녕";
  console.log(message);
};
sayHello();
```

## 4. 전역과 지역 스코프 간단예제

```js
let message = "안녕";
function sayHello() {
  let message = "Hi~";
  console.log(message);
}
sayHello(); // Hi~ 출력 : 지역 스코프가 우선입니다.
```

```ts
let message: string = "안녕";
function sayHello(): void {
  let message: string = "Hi~";
  console.log(message);
}
sayHello(); // Hi~ 출력 : 지역 스코프가 우선입니다.
```

## 5. var 의 문제

- 옛날에는 var 를 사용했습니다. 문제가 많습니다.

```js
// 블록 스코프 예제
const age = 20;
{
  const age = 30;
  const subject = "일반";
}
console.log(age); // 20 출력
console.log(subject); // {}안에 있는거는 안뜸, 오류
```

```ts
// 블록 스코프 예제
const age: number = 20;
{
  const age: number = 30;
  const subject: string = "일반";
}
console.log(age); // 20 출력
console.log(subject); // {}안에 있는거는 안뜸, 오류
```

```js
// 블록 스코프 예제
let age = 20;
{
  let age = 30;
  let subject = "일반";
}
console.log(age); // 20 출력
console.log(subject); // {}안에 있는거는 안뜸, 오류
```

- var는 출력한다

```js
// 블록 스코프 예제
var age = 20;
{
  var age = 30;
  var subject = "일반";
}
console.log(age); // 30 출력
console.log(subject); // 일반 출력
```

```ts
// 블록 스코프 예제
var age: number = 20;
{
  var age: number = 30;
  var subject: string = "일반";
}
console.log(age); // 30 출력
console.log(subject); // 일반 출력
```

- var 는 `{}` 블락 스코프는 없고 function 지역 스코프는 있다.

```js
var age = 25;
function showAge() {
  var age = 30;
}
console.log(age); // function 이 있으므로 25 출력
showAge();
console.log(age);
```

## 6. 전체 스코프 정리

- let, const 는 {} 에 따라 스코프가 정리된다.

```js
let age = 20;
const job = "학생";
{
  let age = 30;
  let job = "개발자";
}
function showPerson() {
  let age = 35;
  let job = "요리사";
}
if (true) {
  let age = 40;
  let job = "사장";
}
```

- var 는 funciton 에 따라 스코프가 정리된다.

```js
var age = 20;
var job = "학생";
{
  var age = 30;
  var job = "개발자";
}
function showPerson() {
  var age = 35;
  var job = "요리사";
}
if (true) {
  var age = 40;
  var job = "사장";
}
```

## 7. 간단 문답

```js
if (true) {
  let age = 100;
}
console.log(age); // Error
```

```js
if (true) {
  var age = 100;
}
console.log(age); // 100 출력
```

# 호이스팅의 이해(변수에서)

- 만들지 않았는데 사용 가능 한 것 (좋지 않다.)

## 1. 호이스팅이 일어나지 않는 경우

```js
console.log(age); // Error
let age = 25;
```

```js
let age = 25;
console.log(age); // 25살 출력 , 순서 중요.
```

```js
console.log(age); // Error
const age = 25;
```

```js
const age = 25;
console.log(age); // 25 출력
```

- let 과 const는 만들고 console.log(); 해야 출력

## 2. 호이스팅이 일어나는 경우

```js
console.log(age); // undefined
var age = 25;
console.log(age); // 25 출력
```

# 변수의 재정의

## 1. 재정의 불가능한 경우

- 불가능한 경우

```js
let age = 20;
let age = 35;

const job = "일반";
const job = "사람";
```

- 가능

```js
let age = 20;
{
  let age = 35;
}

const job = "일반";
{
  const job = "사람";
}
```

## 2. 막 재정의 하는 경우

```js
var age = 20;
var age = 35;

var job = "일반";
var job = "사람";
```

```js
var age = 20;
{
  var age = 35;
}

var job = "일반";
{
  var job = "사람";
}
```

# 그렇다면 let, const, var 중에 무엇을 우선으로 할까?

## 1. 무조건 const 로 하세요.

```js
const age = 30;
```

## 2. 코딩을 하다보니 값이 변경이 되어야 한다면

- 진행중에 필요에 의해서 let 으로 수정한다.

```js
let age = 30;

age = 35;
```

# 함수에서의 스코프

- 데이터를 숨기고, 기능도 숨기고
- 안전한 코드가 구성됨.

```js
function 외부() {
  const nickName = "홍길동";
  // 중첩함수
  function 내부() {
    console.log(nickName);
  }
  내부();
}

console.log(nickName); // Error
내부(); // Error

외부();
```

```js
function 외부(): void {
  const nickName: string = "홍길동";
  // 중첩함수
  function 내부(): void {
    console.log(nickName);
  }
  내부();
}

console.log(nickName); // Error
내부(); // Error

외부();
```

## 2. 함수 외부 변수 접근 제한

- 데이터를 숨긴다.(password)
- 원하는 동작만으로 데이터를 확인시킨다. (내부함수)

```js
function 외부() {
  const password = "123";
  function 내부() {
    return password;
  }
  return 내부;
}

const 기능 = 외부();
const result = 기능();
password; // Error
```

```ts
type ReturnType = () => string;
function 외부(): ReturnType {
  const password: string = "123";
  function 내부(): string {
    return password;
  }
  return 내부;
}

const 기능 = 외부();
const result = 기능();
password; // Error
```

## 3. 클로저 (Closer)

```js
function showAge() {
  const age = 20;
  console.log(age);
}
showAge();
```

- 클로저로 변수값 유지하기

```js
function showAge() {
  let age = 20;

  return function () {
    age = age + 1;
    return age;
  };
}
const a = showAge();

a(); // 21
a(); // 22
```

```ts
type ReturnType = () => number;
function showAge(): ReturnType {
  let age = 20;

  return function (): number {
    age = age + 1;
    return age;
  };
}
const a: ReturnType = showAge();

a(); // 21
a(); // 22
```

- 클로저로 배열의 요소 관리하기

```js
function createList() {
  let itemArr = [];
  return {
    // add(재료) : 재료를 담으면 iteamArr 에 추가한다.
    add(item) {
      iteArr.push(item);
    },
    // show() : 전체 itemArr 보여주기
    show() {
      return itemArr;
    },
  };
}
// itemArr; // Error 스코프 위반

const myList = createList();
myList.add("사과");
myList.add("딸기");
myList.show(); // ["사과", "딸기"]
```

- 클로저는 `함수 안쪽의 데이터를 유지`한다. 함수 종료되더라도

```ts
type ReturnType = { add: (item: string) => void; show: () => string[] };
function createList(): ReturnType {
  let itemArr: string[] = [];
  return {
    add(item: string): void {
      iteArr.push(item);
    },

    show(): string[] {
      return itemArr;
    },
  };
}
// itemArr; // Error 스코프 위반

const myList: ReturnType = createList();
myList.add("사과");
myList.add("딸기");
myList.show(); // ["사과", "딸기"]
```
