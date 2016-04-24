/* eslint arrow-parens: "off" */
describe('アロー表記などの関数シンタックス', () => {
  it('引数無しアロー表記', () => {
    const func = () => 'Hello World';
    expect(func()).toBe('Hello World');
  });

  it('引数ありアロー表記', () => {
    const one = name => `Hello ${name}`;
    expect(one('Taro')).toBe('Hello Taro');
    const two = (first, last) => `Hello ${first} ${last}`;
    expect(two('Taro', 'Yamada')).toBe('Hello Taro Yamada');
  });

  it('複数行アロー表記', () => {
    const two = (first, last) => {
      const greeting = `GoodEvening ${first} ${last}`;
      return greeting;
    };
    expect(two('Taro', 'Yamada')).toBe('GoodEvening Taro Yamada');
  });

  it('アロー表記のコンテキスト', () => {
    // arrow表記のthisを返す関数
    const func = () => {
      return this;
    };
    // 従来の関数定義のthisを返す関数
    const func2 = function () {
      return this;
    };

    const context = {
      // arrow表記の場合のコンテキストチェック
      func
    };
    const context2 = {
      // 従来の関数定義のコンテキストチェック
      func2
    };

    // 処理系によって違う
    expect(context.func()).toBeUndefined();
    expect(context2.func2()).toEqual(context2);
  });

  it('可変長引数', () => {
    const func = (one, two, ...args) => {
      expect(one).toEqual(1);
      expect(two).toEqual(2);
      expect(args).toEqual([3, 4, 5, 'Hello World']);
      expect(...args).toEqual(3);
    };

    func(1, 2, 3, 4, 5, 'Hello World');
  });

  it('デフォルト引数', () => {
    // nameのデフォルト値はYamada
    const func = (name = 'Yamada') => `Hello ${name}`;
    expect(func()).toEqual('Hello Yamada');
    expect(func('Taro')).toEqual('Hello Taro');
  });
});
