//変数宣言のletとconstについてを学ぶ
describe('letとconst', () => {

  it('let', () => {
    // letで宣言
    let hoge = 'hoge';
    expect(hoge).toBe('hoge');
    // ブロックスコープを定義
    {
      // 同じ変数名で宣言
      let hoge = 'fuga';
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
  });

  it('const', () => {
    // constで宣言
    const hoge = 'hoge';
    expect(hoge).toBe('hoge');
    // ブロックスコープを定義
    {
      // 同じ変数名で宣言
      const hoge = 'fuga';
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
    // 再代入の動作を確認
    expect(() => {
      hoge = 'hoga';
    }).toThrow();
  });

});
