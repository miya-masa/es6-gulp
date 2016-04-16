describe('let const', () => {

  it('let', () => {
    let hoge = 'hoge';
    expect(hoge).toBe('hoge');
    {
      let hoge = 'fuga';
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
  });

  it('const', () => {
    const hoge = 'hoge';
    expect(hoge).toBe('hoge');
    {
      const hoge = 'fuga';
      expect(hoge).toBe('fuga');
    }
    expect(hoge).toBe('hoge');
    expect(() => {
      hoge = 'hoga';
    }).toThrow();
  });

});
