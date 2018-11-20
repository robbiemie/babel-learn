const fn = (a, b) => a + b

class Demo {
  test () {
    console.log('test')
  }
}

console.log(fn(1, 2), new Demo())
