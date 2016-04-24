xdescribe('文字列テンプレート', () => {
  it('一行のテンプレート', () => {
    const name = 'Yamada Taro';
    // 埋め込みで文字列を確認
    // TODO 
    expect(helloMessage).toBe('Hello Yamada Taro');
  });

  it('複数行のテンプレート', () => {
    const name = 'Yamada Taro';
    // 埋め込みかつ複数行で文字列を確認
    // TODO 
    expect(helloMessage).toBe('Hello\nYamada Taro');
  });
});
