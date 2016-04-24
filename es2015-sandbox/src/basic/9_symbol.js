xdescribe('Symbol', () => {
  it('Symbolの基本', () => {
    // TODO Symbolの宣言(hoge)
    // const hoge
    // TODO 同じキーでSymbolの宣言(hoge)
    // const hoge2
    // それぞれで比較する
    expect(hoge).not.toBe(hoge2);
    expect(hoge).not.toEqual(hoge2);
    // typeの確認
    expect(typeof hoge).toBe('symbol');
  });

  it('プロパティの中のシンボル', () => {
    // TODO Symbolの宣言
    // const hoge
    // オブジェクトのキーとしてSymbolを利用する
    const obj = {
      [hoge]: 'hoge'
    };
    // keysの確認
    expect(Object.keys(obj)).toEqual( /* TODO */ );
    // 文字列出力の確認
    expect(JSON.stringify(obj)).toEqual( /* TODO */ );
    // 取得の確認
    expect(obj[hoge]).toEqual( /* TODO */ );
  });
});
