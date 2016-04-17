describe('Functions', () => {

  it('Arrow syntax No Args', () => {
    const func = () => 'Hello World';
    expect(func()).toBe('Hello World');
  });

  it('Arrow syntax Exists Args', () => {
    const one = name => `Hello ${name}`;
    expect(one('Taro')).toBe('Hello Taro');
    const two = (first, last) => `Hello ${first} ${last}`;
    expect(two('Taro', 'Yamada')).toBe('Hello Taro Yamada');
  });

  it('Arrow syntax Multi Line', () => {
    const two = (first, last) => {
      const greeting = `GoodEvening ${first} ${last}`;
      return greeting;
    };
    expect(two('Taro', 'Yamada')).toBe('GoodEvening Taro Yamada');
  });

  it('Arrow syntax Context', () => {
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

  it('Variable arguments', () => {

    const func = (one, two, ...args) => {
      expect(one).toEqual(1);
      expect(two).toEqual(2);
      expect(args).toEqual([3, 4, 5, 'Hello World']);
      expect(...args).toEqual(3);
    };
    func(1, 2, 3, 4, 5, 'Hello World');
  });

  it('デフォルト引数', () => {

    const func = (name = 'Yamada') => `Hello ${name}`;
    expect(func()).toEqual('Hello Yamada');
    expect(func('Taro')).toEqual('Hello Taro');
  });
});
