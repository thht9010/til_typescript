# 객체(Object)

- `데이터`와 `데이터`를 다루는 기능을 가진 결과물

```js
const 객체명 = {
    데이터명: 데이터값,
    기능명: function() {데이터 가공}
}
```

```js
const 객체명 = {
    속성명: 속성값,
    메소드: function() {데이터 가공}
}
```

## 1. `가장 간단`하게 객체를 만드는 법

- 타이핑으로 객체 `{}`를 적어서 만든다고 해서 `객체 리터럴` 이라고 한다.
- `객체 리터럴`로 만들경우 무조건 지켜주세요.

```js
const 객체명 = {
    속성명1: 속성값,
    속성명2: 속성값,

};
```

- 만약 1개의 객체를 생성하는 경우라면 추천
- 만약 1개의 객체를 생성하는 경우라면 이름은 `카멜케이스` 로 한다.



```js
const personInfo = { nickName: "하이", age: 30, job: "가수" }
```

## 2. 객체를 무한하게 생성하는 `객체 생성자 함수 작성`

- 여러개의 객체를 생성하는 경우는 `파스칼 케이스` 를 함수이름으로 지정.

- 절대로 주의하셔야합니다.

```js
function PersonInfo () {
    this.name = "홍길동";
    this.age = "22";
    this.job = "소설가";
}
PersonInfo(); // 함수 실행으로 진행
new PersonInfo(); // 함수 실행 결과로 객체를 생성함.
```


## 3. 케이스를 구분해서 생각해보자

### 1. 그냥 함수로 사용한다면

- 아래처럼 함수를 실행하면 `this`가 window 로 된다.
- `var name= "홍길동"; var age = 20; var job= "소설가"; `
- 우리가 원한 객체 생성이 아니다

```js
function PersonInfo () {
    this.name = "홍길동";
    this.age = "22";
    this.job = "소설가";
}

const user = new PersonInfo(); // 함수 실행으로 진행
{
    name = "홍길동";
    age = 22;
    job = "소설가";
}
```

### 2. `new`를 붙여서 함수 사용한다면 객체를 생성하겠다는 목적

```js
```


## 4. 객체의 항목을 참조하는 법

```js
const hong = {
    age: 30,
    name: "hong",
};

console.log(hong.age);
console.log(hong.name);
```

- 연관배열 방식으로 참조하는 법

```js
const hong = {
    age: 30,
    name: "hong",
};

console.log(hong.["age"]);
console.log(hong.["name"]);
```

- for ... in 방법으로 항목 참조하는 법

```js
const hong = {
    age: 30,
    name: "홍",
};

for (let key in hong) {
    console.log(key); // "age", "name"
    hong[key] // 30, "홍"
}
```

## 5. 객체에 기능 추가하기 (메소드)

