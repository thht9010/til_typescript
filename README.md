# 객체(Object)

- `연관성있는 데이터 들`을 `이름`을 붙인다
- `데이터`와 `데이터`를 다루는 기능을 가진 결과물

```js
const 객체명 = {
    데이터명: 데이터값,
    기능명: function() {데이터 가공}
}
```

```ts
const 객체명: {데이터명: 종류; 기능명: () => 리턴타입종류 } = {
    데이터명: 데이터값,
    기능명: function() {데이터 가공}
}
```

```js
const 객체명 = {
    property: 속성값,
    method: function() {데이터 가공}
}
```

```ts
const 객체명: {propert: 종류; method: () => 리턴타입종류 } = {
    property: 속성값,
    method: function() {데이터 가공}
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

```ts
const 객체명: { 속성명1: 종류; 속성명2: 종류 } = {
  속성명1: 속성값,
  속성명2: 속성값,
};
```

- 만약 1개의 객체를 생성하는 경우라면 추천
- 만약 1개의 객체를 생성하는 경우라면 이름은 `카멜케이스` 로 한다.

```js
const personInfo = { nickName: "하이", age: 30, job: "가수" };
```

```ts
const personInfo: { nickName: string; age: number; job: string } = {
  nickName: "하이",
  age: 30,
  job: "가수",
};
```

## 2. 객체를 무한하게 생성하는 `객체 생성자 함수 작성`

- 여러개의 객체를 생성하는 경우는 `파스칼 케이스` 를 함수이름으로 지정.

- 절대로 주의하셔야합니다.

```js
function PersonInfo() {
  this.name = "홍길동";
  this.age = "22";
  this.job = "소설가";
}
PersonInfo(); // 함수 실행으로 진행
new PersonInfo(); // 함수 실행 결과로 객체를 생성함.
```

- 많이 복잡. 추후 필요로 한 것은 class 라는 문법입니다.

```ts
type PersonInfoType = {
  name: string;
  age: number;
  job: string;
};
function PersonInfo(this: PersonInfoType) {
  this.name = "홍길동";
  this.age = 22;
  this.job = "소설가";
}
```

## 3. 케이스를 구분해서 생각해보자

### 1. 그냥 함수로 사용한다면

- 아래처럼 함수를 실행하면 `this`가 window 로 된다.
- `var name= "홍길동"; var age = 20; var job= "소설가"; `
- 우리가 원한 객체 생성이 아니다

```js
function PersonInfo() {
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

- 추후 `class` 로 해결해야 할 사항

```ts
type PersonInfoType = {
  name: string;
  age: number;
  job: string;
};
function PersonInfo(this: PersonInfoType): void {
  this.name = "홍길동";
  this.age = "22";
  this.job = "소설가";
  // Default 로 this 가 리턴됩니다.
  //   return this;
}

// ts 에서는 new 는 class 로 생성을 원활히 지원한다.
// 객체 생성자 함수를 ts 로 하려면 편법을 써서 할 수 밖에 없다.

const result: PersonInfoType = new (PersonInfo as unknown as {
  new (): PersonInfoType;
})(); // 함수 실행 결과로 객체를 생성함.

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

```ts
type HongType = { age: number; name: stirng };
const hong: HongType = {
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
type HongType = { age: number, name: stirng };
const hong: HongType = {
  age: 30,
  name: "hong",
};

for (let key in hong) {
  console.log(key); // "age", "name"
  console.log(hong[key]); // 30, "홍"
}
```

- 1. 해결 방법 중 keyof
  - `keyof` 는 객체의 `key 를 문자열` 로 만든다.
  - 아래에 예에서는 age 를 "age" 로 문자열로 만든다.

```ts
type HongType = {
    age: number;
    name: stirng;
};
const hong: HongType = {
  age: 30,
  name: "hong",
};

for (let key in hong) {
  console.log(key); // "age", "name"
  console.log(key); // 30, "홍"
}
// keyof 활용으로 속성명을 문자열로 추출
keyof HongType; // "age", "name"
```

- 2. 해결 방법중 as : Type Asserstion - 타입 단언
  - `특정 타입이라고 확신한다` 라고 컴파일러에게 알려줌.
```ts
type HongType = {
  age: number;
  name: stirng;
};
const hong: HongType = {
  age: 30,
  name: "hong",
};

for (let key in hong) {
  console.log(key); // "age", "name"
  console.log(hong[key as keyof HongType]); // 30, "홍"
}
```

- 3. 해결 방법 중에 Object.entries
  - 위 구문은 `기본 내장 Object 객체`의 entries 메서드를 활용
  - entries 메서드는 객체의 속성에 [key, value] 로 출력시켜준다.

```ts
type HongType = {
  age: number;
  name: stirng;
};
const hong: HongType = {
  age: 30,
  name: "hong",
};

console.log(Object.entries(hong) );
// 아래는 출력 결과

[
    ["age", 30],
    ["name", "hong"],
];

// 방법 2: Object.entries 사용
for (const [key, value] of Object.entries(hong)) {
  console.log(key, value); // "age" 30, "name" "hong"
}
```


## 5. 예제

```js
const 가수_이름1 = "안녕";
const 가수_이름2 = "하세요";
const 가수_이름3 = "반가";
const 가수_이름4 = "워요";

const 가수_생일1 = "여름";
const 가수_생일2 = "이오";
const 가수_생일3 = "고있";
const 가수_생일4 = "어요";

const 가수_이름 = ["안녕", "하세요", "반가", "워요"];
const 가수_생일 = ["여름", "이오", "고있", "어요"];

const 가수_안녕 = { 이름: "안녕", 생일: "여름" };
const 가수_하세요 = { 이름: "하세요", 생일: "이오" };
const 가수_반가 = { 이름: "반가", 생일: "고있" };
const 가수_워요 = { 이름: "워요", 생일: "어요" };

const 가수 = [
  { 이름: "안녕", 생일: "여름" },
  { 이름: "하세요", 생일: "이오" },
  { 이름: "반가", 생일: "고있" },
  { 이름: "워요", 생일: "어요" },
];
```

```ts
const 가수_이름1: string = "안녕";
const 가수_이름2: string = "하세요";
const 가수_이름3: string = "반가";
const 가수_이름4: string = "워요";

const 가수_생일1: string = "여름";
const 가수_생일2: string = "이오";
const 가수_생일3: string = "고있";
const 가수_생일4: string = "어요";

const 가수_이름: string[] = ["안녕", "하세요", "반가", "워요"];
const 가수_생일: string[] = ["여름", "이오", "고있", "어요"];

const 가수_안녕: { 이름: string; 생일: string } = { 이름: "안녕", 생일: "여름" };
const 가수_하세요: { 이름: string; 생일: string } = { 이름: "하세요", 생일: "이오" };
const 가수_반가: { 이름: string; 생일: string } = { 이름: "반가", 생일: "고있" };
const 가수_워요: { 이름: string; 생일: string } = { 이름: "워요", 생일: "어요" };


const 가수: { 이름: string; 생일: string }[] = [
  { 이름: "안녕", 생일: "여름" },
  { 이름: "하세요", 생일: "이오" },
  { 이름: "반가", 생일: "고있" },
  { 이름: "워요", 생일: "어요" },
```


## 5. 객체에 기능 추가하기 (메소드)

## 6. 객체에 기능 추가하기

- 객체에 만든 `함수`를 `Method, Behavior(행동)`

### 6.1. 손으로 만든 객체 리터럴에 기능추가하기

```js
const 가수_이름_안녕 = {
  이름: "안녕",
  생일: "여름",
  // 기능 (Method)
  sing: function () {
    console.log("안녕이 노래한다.");
  },
};

가수_이름_안녕.sing();
```

```js
const 가수_이름_안녕 = {
  이름: "안녕",
  생일: "여름",
  // 기능 (Method)
  sing: function () {
    console.log(`${this.이름}이 노래한다.`);
  },
  dance: function () {
    console.log(`${this.이름}이 춤춘다.`);
  },
};

가수_이름_안녕.sing();
가수_이름_안녕.dance();
```

## 6.2. 객체 생성자 함수로 생성된 객체에 기능 추가하기

- new 를 반드시 붙여서 함수를 실행해야만 합니다.
- 반드시 관례상 `Pascal` 로 이름을 정한다.

```js
function Student() {
    this.no = "0103";
    this.name = "홍길동";
}
// new 로 만든 변수는 인스턴스 라고 합니다.
const 학생_1 = new Student();
{no: "0103", name: "홍길동"} // 결과

const 학생_2 = new Student();
{no: "0103", name: "홍길동"} // 결과

const 학생_3 = new Student();
{no: "0103", name: "홍길동"} // 결과

```

- 업그레이드

```js
function Student(_번호, _이름) {
    this.no = _번호;
    this.name = _이름;
}
// new 로 만든 변수는 인스턴스 라고 합니다.
const 학생_1 = new Student("0208", "김길동");
{no: "0208", name: "김길동"} // 결과

const 학생_2 = new Student("0305", "고길동");
{no: "0305", name: "고길동"} // 결과

const 학생_3 = new Student("0808", "홍길동");
{no: "0808", name: "홍길동"} // 결과
```

- 메서드 추가

```js
function Student(_번호, _이름) {
    this.no = _번호;
    this.name = _이름;
    this.say = function() {
        console.log(`${this.name}은 ${this.no}입니다`);
    };
    this.hi = () => {
        console.log(`${this.name}님 안녕하세요`)
    }
}
// new 로 만든 변수는 인스턴스 라고 합니다.
const 학생_1 = new Student("0208", "김길동");
{no: "0208", name: "김길동" , say: fn, hi: fn } // 결과

const 학생_2 = new Student("0305", "고길동");
{no: "0305", name: "고길동" say: fn, hi: fn } // 결과

const 학생_3 = new Student("0808", "홍길동");
{no: "0808", name: "홍길동" say: fn, hi: fn } // 결과
```

### 6.3. 객체에 속해 있는 메서드를 축약해서 생성하는 문법

```js
const 안녕 = {
  name: "안녕",
  // 기능 (Method)
  sing: function () {
    console.log(`${this.이름}이 노래한다.`);
  },
  dance() {
    // 메서드 축약형
    console.log(`${this.이름}이 춤춘다.`);
  },
};
```

```js
function Student(_번호, _이름) {
  this.no = _번호;
  this.name = _이름;
  this.say = function () {};
  this.hi = () => {};
}
```
