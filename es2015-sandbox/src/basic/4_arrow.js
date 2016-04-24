/* eslint arrow-parens: "off" */
xdescribe('アロー表記などの関数シンタックス', () => {
  it('引数無しアロー表記', () => {

    // const func =  TODO  arrow表記で記述する
    expect(func()).toBe('Hello World');
  });

  it('引数ありアロー表記', () => {
    // const one = TODO  arrow表記で記述する
    expect(one('Taro')).toBe('Hello Taro');

    // const two = TODO  arrow表記で記述する
    expect(two('Taro', 'Yamada')).toBe('Hello Taro Yamada');
  });

  it('複数行アロー表記', () => {
    // const two = TODO arrow表記で記述する
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

    // 処理系によってコンテキストが異なることを確認する
    expect(context.func()).toEqual(/* TODO */);
    expect(context2.func2()).toEqual(/* TODO */);
  });

  it('可変長引数', () => {
    const func = (one, two, ...args) => {
      expect(one).toEqual(/* TODO */);
      expect(two).toEqual(/* TODO */);
      expect(args).toEqual(/* TODO */);
      expect(...args).toEqual(/* TODO */);
    };

    func(1, 2, 3, 4, 5, 'Hello World');
  });

  it('デフォルト引数', () => {
    // nameのデフォルト値はYamada
    // const func = // TODO arrow表記で記述する
    expect(func()).toEqual('Hello Yamada');
    expect(func('Taro')).toEqual('Hello Taro');
  });
});
