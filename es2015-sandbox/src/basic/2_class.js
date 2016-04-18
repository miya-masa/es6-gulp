class Person {
  constructor(firstName = 'Taro', lastName = 'Yamada') {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

}
describe('Class', () => {
  it('Basic', () => {
    const yamada = new Person();
    expect(yamada.greeting()).toEqual('Hello Taro Yamada');

    const sato = new Person('Hanako', 'Sato');
    expect(sato.greeting()).toEqual('Hello Hanako Sato');
  });

  it('Extends', () => {

    class BusinessPerson extends Person {
      constructor(firstName = 'Taro', lastName = 'Yamada', rank = 'Normal') {
        super(firstName, lastName);
        this.rank = rank;
      }

      greeting() {
        return `${super.greeting()}.My rank is ${this.rank}`;
      }
    }

    const yamada = new BusinessPerson();
    expect(yamada.greeting()).toEqual('Hello Taro Yamada.My rank is Normal');

    const sato = new BusinessPerson('Hanako', 'Sato', 'President');
    expect(sato.greeting()).toEqual('Hello Hanako Sato.My rank is President');

  });
});
