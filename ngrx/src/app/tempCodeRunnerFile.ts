class Abc {

  show() {
    console.log('abc')
  }
}

class Teste {
  testea() {
    const abc = new Abc();
    abc.show()
  }
}