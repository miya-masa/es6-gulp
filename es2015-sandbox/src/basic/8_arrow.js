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
    // arrow表記の関数
    const func = () => {
      return this.name;
    };
    // 従来の関数定義
    const func2 = function() {
      return this.name;
    };

    const name = 'Yamada Taro';
    const context = {
      name,
      // arrow表記の場合のコンテキストチェック
      func
    };
    const context2 = {
      name,
      // 従来の関数定義のコンテキストチェック
      func2
    };

    expect(context.func()).toEqual('');
    expect(context2.func2()).toEqual('Yamada Taro');
  });

});
