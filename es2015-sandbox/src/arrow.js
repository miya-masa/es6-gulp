describe('arrow', () => {

  it('No Args', () => {
    const func = () => 'Hello World';
    expect(func()).toBe('Hello World');
  });

  it('Multi Args', () => {
    const one = name => `Hello ${name}`;
    expect(one('Taro')).toBe('Hello Taro');
    const two = (first, last) => `Hello ${first} ${last}`;
    expect(two('Taro', 'Yamada')).toBe('Hello Taro Yamada');
  });

  it('Multi Line', () => {
    const two = (first, last) => {
      const greeting = `GoodEvening ${first} ${last}`;
      return greeting;
    };
    expect(two('Taro', 'Yamada')).toBe('GoodEvening Taro Yamada');
  });

  it('Context', () => {
    const func = () => {
      return this.name;
    };
    const func2 = function() {
      return this.name;
    };
    const name = 'Yamada Taro';
    const context = {
      name,
      func
    };
    const context2 = {
      name,
      func2
    };
    console.log(context.func());
    console.log(context2.func2());
  });

});
