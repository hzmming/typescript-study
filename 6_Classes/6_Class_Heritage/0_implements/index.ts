export {};

interface Pingable {
  ping(): void;
}

// 使用 `implements` 来校验class是否满足特定接口
class Sonar implements Pingable {
  ping() {
    console.log("ping");
  }
}

// ERROR!!!
// Class 'Ball' incorrectly implements interface 'Pingable'.
// Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.ts(2420)
class Ball implements Pingable {
  pong() {
    console.log("pong");
  }
}
