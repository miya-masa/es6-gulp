describe('Symbol', () => {
  it('Symbolの基本', () => {
    // Symbolの宣言(hoge)
    const hoge = Symbol('hoge');
    // 同じキーでSymbolの宣言(hoge)
    const hoge2 = Symbol('hoge');
    // それぞれで比較する
    expect(hoge).not.toBe(hoge2);
    expect(hoge).not.toEqual(hoge2);
    // typeの確認
    expect(typeof hoge).toBe('symbol');
  });

  it('プロパティの中のシンボル', () => {
    // Symbolの宣言
    const hoge = Symbol('hoge');
    // オブジェクトのキーとしてSymbolを利用する
    const obj = {
      [hoge]: 'hoge'
    };
    // keysの確認
    expect(Object.keys(obj)).toEqual([]);
    // 文字列出力の確認
    expect(JSON.stringify(obj)).toEqual('{}');
    // 取得の確認
    expect(obj[hoge]).toEqual('hoge');
  });
});
