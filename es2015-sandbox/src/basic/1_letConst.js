// 変数宣言のletとconstについてを学ぶ
xdescribe('letとconst', () => {
  it('let', () => {
    // letで宣言
    // START TODO
    // END TODO
    expect(hoge).toBe('hoge');
    // ブロックスコープを定義
    {
      // 同じ変数名で宣言
      // START TODO
      // END TODO
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
  });

  it('const', () => {
    // constで宣言
    // START TODO
    // END TODO
    expect(hoge).toBe('hoge');
    // ブロックスコープを定義
    {
      // 同じ変数名で宣言
      // START TODO
      // END TODO
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
  // 再代入の動作を確認
  // hoge = 'hoga';
  });
});
