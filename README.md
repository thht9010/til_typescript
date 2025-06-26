# class

- 목적은 `인스턴스`, 즉 `new 를 통해서 객체`를 만드는 것

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

const ins 1 = new Robot("여러분");
console.log(ins1); //Robot { who: "여러분"}

const ins 2 = new Robot("안녕");
console.log(ins2); //Robot { who: "안녕"}

const ins 3 = new Robot("하세요");
console.log(ins3); //Robot { who: "하세요"}

const ins 4 = new Robot("반가워요");
console.log(ins4); //Robot { who: "반가워요"}

```

## 4. 객체의 메서드 셋팅

- 메서드는 객체의 기능을 말함. (객체에 만든 함수를 메서드 라고 함)


```js
class Robot {
  // 메서드 축약형
  constructor(who) {
    console.log("안녕");
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

