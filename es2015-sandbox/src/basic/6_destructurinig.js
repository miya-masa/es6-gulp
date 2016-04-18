describe('変数の分割代入', () => {

  it('配列代入', () => {
    // 配列形式で変数の宣言 + 代入
    const [hoge, foo] = ['hoge', 'foo'];

    expect(hoge).toEqual('hoge');
    expect(foo).toEqual('foo');
  });

  it('オブジェクト代入', () => {
    // オブジェクト形式で変数の宣言 + 代入
    const {hoge, foo} = {
      foo: 'foo',
      hoge: 'hoge'
    };

    expect(hoge).toEqual('hoge');
    expect(foo).toEqual('foo');
  });

  it('オブジェクトの入れ子形式', () => {
    // 最初に変数代入のデータ構造を宣言
    const data = {
      hoge: 'hoge',
      foo: 'foo',
      piyo: {
        fuga: 'fuga'
      }
    };
    // 入れ子形式で変数の宣言 + 代入
    const {hoge, foo, piyo, piyo: {fuga}} = data;

    expect(hoge).toEqual('hoge');
    expect(foo).toEqual('foo');
    expect(piyo.fuga).toEqual('fuga');
    expect(fuga).toEqual('fuga');
  });

  it('変数名の指定', () => {
    // オブジェクト形式かつ別変数名で代入する
    const {hoge:x, foo} = {
      hoge: 'hoge',
      foo: 'foo'
    };

    expect(x).toEqual('hoge');
  });

  it('デフォルト値の指定', () => {
    // オブジェクト形式で値がなかった時を設定する
    const {hoge: x = 'default', foo} = {
      foo: 'foo'
    };

    expect(x).toEqual('default');
  });

});
