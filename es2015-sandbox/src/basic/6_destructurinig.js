xdescribe('変数の分割代入', () => {
  it('配列代入', () => {
    // 配列形式で変数の宣言 + 代入
    // TODO hoge fooを配列方式で分割代入

    expect(hoge).toEqual('hoge');
    expect(foo).toEqual('foo');
  });

  it('オブジェクト代入', () => {
    // オブジェクト形式で変数の宣言 + 代入
    // TODO hoge fooをオブジェクト方式で分割代入

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

    expect(hoge).toEqual( /* TODO */ );
    expect(foo).toEqual( /* TODO */ );
    expect(piyo.fuga).toEqual( /* TODO */ );
    expect(fuga).toEqual( /* TODO */ );
  });

  it('変数名の指定', () => {
    // TODO オブジェクト形式かつ別変数名で代入する
    //  {
    //   hoge: 'hoge',
    //   foo: 'foo'
    // };
    expect(x).toEqual('hoge');
    expect(foo).toEqual('foo');
  });

  it('デフォルト値の指定', () => {
    // TODO オブジェクト形式で値がなかった時を設定する

    expect(x).toEqual('default');
    expect(foo).toEqual('foo');
  });
});
