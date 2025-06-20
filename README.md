# 조건문(Condition)

## 1. if 문

- 조건의 결과가 true 이면 { 안쪽 실행 }-

```ts
const age: number = 28;
if (age >= 28) {
  console.log("성인이십니다.");
}
```

- 만약 { 한줄만 실행 한다면? }

```ts
const age: number = 28;
if (age > 28) console.log("성인이시군요");

if (age > 28) console.log("성인이시군요");
console.log("입장하세요");
```

- if ~ else 구문

```ts
// else는 거짓일때
const age: number = 20;
if (age > 28) {
  console.log("성인이시군요");
} else {
  console.log("나중에 오세요");
}
```

- if ~ else if ~ else if ~ else

```ts
const.age: number = 25;
if (age >= 40) {
  console.log("40 대 이상입니다.");
} else if (age >=30) {
  console.log("30대 이상입니다.");
} else if (age >=40) {
  console.log("40 대 이상입니다.")
}
```

- 예측해봅시다

```ts
const.age: number = 40;
// 논리적으로 잘못 코딩함.
if (age >= 20) {
  console.log("20 대 이상입니다.");
} else if (age >=30) {
  console.log("30대 이상입니다.");
} else if (age >=40) {
  console.log("40 대 이상입니다.")
}
```

- 예측해 봅시다.

```ts
const result: string = "";
// falshy 한 값이므로 false 로 판단.
// false, null, undefined, "", 0, NaN

if (result) {
  console.log("결과 참");
} else {
  console.log("결과 거짓");
}
```

## 2. switch 문

- 값이 일치하는지를 비교해서 코드 분기

```ts
const level: string = "5층";
switch (level) {
  case "5층":
    console.log("5층 내려요");
    break;
  case "4층":
    console.log("4층 내려요");
    break;
  case "3층":
    console.log("3층 내려요");
    break;
  case "2층":
    console.log("2층 내려요");
    break;
  case "1층":
    console.log("1층 내려요");
    break;
  default:
    console.log("값이 아무것도 같지 않다.");
    break;
}
```

- switch 문의 값은 직접 원시값으로 작성시 오류발생이 가능
- TypeScript 에 있는 `enum` 을 사용하시길 권장
- enum 은 정해진 값만 사용하게 권장할때 (열거형)
- 인터넷 상태 등에 대한 내용을 코드 할때 많이 사용

```ts
enum Level {
  L1 = "1층",
  L2 = "2층",
  L3 = "3층",
  L4 = "4층",
  L5 = "5층",
}
const level: string = "5층";
switch (level) {
  case Level.L5:
    console.log("5층 내려요");
    break;
  case Level.L4:
    console.log("4층 내려요");
    break;
  case Level.L3:
    console.log("3층 내려요");
    break;
  case Level.L2:
    console.log("2층 내려요");
    break;
  case Level.L1:
    console.log("1층 내려요");
    break;
  default:
    console.log("값이 아무것도 같지 않다.");
    break;
}
```

- 네트워크 상태를 체크해 보자.

```ts
enum NetworkStatus {
  Offline = "Off",
  wifi = "wifi",
  LTE = "LTE",
  G5 = "5G",
}
const net = NetworkStatus.G5;
switch (net) {
  case NetworkStatus.G5:
    break;
  case NetworkStatus.LTE:
    break;
  case NetworkStatus.WiFi:
    break;
  case NetworkStatus.Offline:
    break;
}
```

# 반복문(Loop)

## 1. for

- 조건이 참이면 코드를 반복 실행함.

```ts
const 반복횟수: number = 10;
for (let 초기값: number = 0; 초기값 < 반복횟수; 초기값 = 초기값 + 1) {
  // 코드 실행
}

const arr: number[] = [1, 2, 3];
for (let i: number = 0; i < arr.length; i = i + 1) {
  arr[i];
}

const total: number = 10;
for (let i: number = 0; i < total; i += 1) {
  if (i === 5) {
    break; // break 는 for 구문을 벗어남
  }
  // 실행코드
}

const total: number = 10;
for (let i: number = 0; i < total; i += 1) {
  if (i === 5) {
    continue; // 실행구문을 건너뛰고 계속 반복
  }
  // 실행코드
}

const total: number = 10;
for (let i: number = 0; i < total; i += 1) {
  for (let j: number = 0; j < 5; j++) {
    if (j === 2) {
      break;
    }
  }
}
```

## 2. while

- `조건이 참` 이면서 `반복 횟수를 모를때` 사용

```ts
let count: number = 0;
while (count < 5) {
  //실행하라.
  count = count + 1; // 반드시 조건을 거짓으로 만들도록 코드 필요.
}
```

## 3. do while

- `일단 한번은 실행`하자. 그리고, `조건이 참` 이면서 `반복 횟수를 모를때` 사용

```ts
let count: number = 5;
while (count < 5) {
  //실행하라.
  count = count + 1; // 반드시 조건을 거짓으로 만들도록 코드 필요.
}

let tries: number = 0;
do {
  // 할일 코드 실행
  // 무한 루프 방지 거짓을 만들 값
  tries = tries + 1;
} while (tries < 5);
```

## 4. for ... of

- 배열 각각의 요소에 값을 알아낼때

```ts
const arr: number[] = [1, 2, 3];
for (let i: number = 0; i < arr.length; i = i + 1) {
  arr[i];
}

for (let item of arr) {
  item; // 1     2      3
}
```

## 5. for ... in

- `객체`의 `속성명`을 알아낼때

```ts
const hong = { age: 25, city: "daegu" };
for (let key in hong) {
  key; //    age      city

  hong[kye]; //        20         daegu
}
```
