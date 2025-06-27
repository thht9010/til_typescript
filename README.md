# class

- 클래스는 `설계도`이다.
- 클래스 즉, 설계도를 기반으로 `객체(결과물-instance)` 을 만드는 것을 말함.
- 목적은 `인스턴스`, 즉 `new 를 통해서 객체`를 대량 생산하는 것.
- class 는 문법으로 존재하며, 실무에서 직접 class 를 `만드는 경우는 극히` 드뭅니다.

## 1. class 기본 모양

```js
class 클래스명 {}
const 인스턴스 = new 클래스명();

class Robot {}
const ins = new Robot();
```

## 2. class 에서 new 하면 실행되는 함수는 약속

- constructor 메서드 : 디폴트 생성자 메서드

```js
class 클래스명 {
  // 작성 안하셔도 기본적으로 작동됩니다
  constructor() {}
}
const 인스턴스 = new 클래스명();

class Robot {
  // 메서드 축약형
  constructor() {
    console.log("안녕");
  }
}
const ins = new Robot();
```

- constructor 메서드 : 속성의 초기 값을 셋팅해 줄 수 있어요

## 3. 객체의 속성을 셋팅한다.

- {`속성`: `속성값`}
- constructor 를 활용한다.

```js
class Robot {
  // 메서드 축약형
  constructor(who) {
    console.log("안녕");
  }
}
const ins = new Robot();

const ins1 = new Robot("여러분");
console.log(ins1); //Robot { who: "여러분"}

const ins2 = new Robot("안녕");
console.log(ins2); //Robot { who: "안녕"}

const ins3 = new Robot("하세요");
console.log(ins3); //Robot { who: "하세요"}

const ins4 = new Robot("반가워요");
console.log(ins4); //Robot { who: "반가워요"}
```

- TypeScript 만의 방식이 있다.

```ts
class Robot {
  // 여기는 클래스 내부 라서 규칙이 있습니다.
  // 속성을 정의해 줍니다.
  who: string;
  // 메서드 축약형
  constructor(who: string) {
    console.log(`${this.who}안녕`);
  }
}
const ins = new Robot();

const ins1: Robot = new Robot("여러분");
console.log(ins1); //Robot { who: "여러분"}

const ins2: Robot = new Robot("안녕");
console.log(ins2); //Robot { who: "안녕"}

const ins3: Robot = new Robot("하세요");
console.log(ins3); //Robot { who: "하세요"}

const ins4: Robot = new Robot("반가워요");
console.log(ins4); //Robot { who: "반가워요"}
```

## 4. 객체의 메서드 셋팅

- 메서드는 객체의 기능을 말함. (객체에 만든 함수를 메서드 라고 함)

```js
class Robot {
  // 메서드 축약형
  constructor(who) {
    console.log(`${this.who}안녕`);
  }
  // 걷기 메소드
  walk() {
    console.log(`${this.who} 님과 같이 걸어요`);
  }
  talk() {
    console.log(`${this.who} 님과 같이 대화하고 싶어요`);
  }
}
const ins = new Robot();

const ins 1 = new Robot("여러분");
console.log(ins1.who);
ins1.talk();
ins1.walk();
```

```ts
class Robot {
  // 속성 정의
  who: string;

  // 메서드 축약형
  constructor(who: string ) {
    console.log(`${this.who}안녕`);
  }
  // 걷기 메소드
  walk(): void {
    console.log(`${this.who} 님과 같이 걸어요`);
  }
  talk(): {
    console.log(`${this.who} 님과 같이 대화하고 싶어요`);
  }
}
const ins = new Robot();

const ins 1 = new Robot("여러분");
console.log(ins1.who);
ins1.talk();
ins1.walk();
```

## 5. 오로지 class 에만 있는 상속 (extends)

- `유전자`처럼 생각하자.

```js
class Animal {
  constructor() {
    this.eye = 2;
  }
  cry() {}
  eat() {}
}
class Cat extends Animal {
  meow() {}
}

new Animal();

class Dog extends Animal {
  짖기() {}
}
```

## 6. 상속에서 속성 값 전달하기

```js
class Animal {
  constructor() {
    this.eye = 2;
  }
  cry() {}
  eat() {}
}
class Cat extends Animal {
  meow() {}
}

new Animal();

class Dog extends Animal {
  짖기() {}
}
```

```js
class Animal {
  constructor(_hi) {
    this.eye = 2;
    this.hi = _hi;
  }
  cry(): void {}
  eat(): void {}
}

const ani: Animal = new Animal("Hello");



class Cat extends Animal {
  // extends 를 하셨으므로
  super(_hi);

}
const cat = new cat("Hello");

new Animal();

class Dog extends Animal {
  constructor (_hi: stirng) {
    super(_hi)
  }
  짖기(): void {}
}

const dog = new dog("Hello");
```

```ts
class Animal {
  constructor(_hi) {
    this.eye = 2;
    this.hi = _hi;
  }
  cry() {}
  eat() {}
}

const ani = new Animal("Hello");

class Cat extends Animal {
  // extends 를 하셨으므로
  super(_hi);
}
const cat: Cat = new cat("Hello");

new Animal();

class Dog extends Animal {
  constructor(_hi) {
    super(_hi);
  }
  짖기(): void {}
}

const dog: Dog = new dog("Hello");
```

## 오로지 TypeScript 에만 존재하는 문법

- public 속성 접근 제어자 (누구나 접근가능)
- private 속성 접근 제어자 (상속받은 것만)
- protected 속성 접근 제어자 (상속받은 대상 접근가능)

```ts
class BankAccount {
  public user: string;
  private balance: number;
  constructor(user: string, balance: number) {
    this.user = user;
    this.balance = balance;
  }
  showBalance() {
    this.balance; // 내부에서 활용 가능
  }
}
const hi: BankAccount = new BankAccount("하이", 505050);
hi.user;
hi.balance; // 비공개 데이터라서 Error
```

```js
class Animal {
  public eye: number;
  private nose: number;
  protected lips: number;
}
class Cat extends Animal {
  construtor() {
    super();
  }
  show() {
    this.eye; // public 이라서 마음대로 접근 가능
    this.nose; // private 이라서 아무도 접근 못함 , Error
    this.lips; // protected 는 허용됨
  }
}

// 인스턴스 객체 생성
const cat = new Cat ();
cat.eye; // public 이라서 마음대로 접근 가능
cat.nose; // private 이라서 아무도 접근 못함 Error
cat.lips; // protected 라서 아무도 접근 못함 Error
```

## 클래스에서 new 없이 사용가능한 속성과 메서드

- Math.PI, Math.round(), Math.floor();
- `static` 을 붙이면 new 없이 사용가능

```js
class MathTool {
  static PI = 3.14;
  static muliti(x, y) {
    return x * y;
  }
}

MathTool.PI;
MathTool.muliti(5, 6);
```

```ts
class MathTool {
  static PI: number = 3.14;
  static muliti(x: number, y: number) {
    return x * y;
  }
}

MathTool.PI;
MathTool.muliti(5, 6);
```
