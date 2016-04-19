// Personクラスを定義
class Person {

  // コンストラクタ.
  constructor(firstName = 'Taro', lastName = 'Yamada') {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // greetingメソッド
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

}

// Personを継承したBusinessPersonを定義
class BusinessPerson extends Person {
  // コンストラクタ.
  constructor(firstName = 'Taro', lastName = 'Yamada', rank = 'Normal') {
    super(firstName, lastName);
    this.rank = rank;
  }

  // greegin メソッド.superを使って親のメソッドを呼び出してみる.
  greeting() {
    return `${super.greeting()}.My rank is ${this.rank}`;
  }
}


describe('Class', () => {
  it('基本', () => {
    // Personクラスのインスタンスを生成
    const yamada = new Person();
    expect(yamada.greeting()).toEqual('Hello Taro Yamada');

    // Personクラスのコンストラクタの引数ありでインスタンスを生成.
    const sato = new Person('Hanako', 'Sato');
    expect(sato.greeting()).toEqual('Hello Hanako Sato');
  });

  it('クラスの継承', () => {
    // BusinessPersonを生成
    const yamada = new BusinessPerson();
    expect(yamada.greeting()).toEqual('Hello Taro Yamada.My rank is Normal');

    // BusinessPersonをコンストラクタ引数ありで生成
    const sato = new BusinessPerson('Hanako', 'Sato', 'President');
    expect(sato.greeting()).toEqual('Hello Hanako Sato.My rank is President');
  });
});
