describe('Symbol', () => {
  it('Symbol', () => {
    const hoge = Symbol('hoge');
    const hoge2 = Symbol('hoge');
    expect(hoge).not.toBe(hoge2);
    expect(hoge).not.toEqual(hoge2);
    expect(typeof hoge).toBe('symbol');
  });
  it('Props', () => {
    const hoge = Symbol('hoge');
    const obj = {
      [hoge]: 'hoge'
    };
    expect(Object.keys(obj)).toEqual([]);
    expect(JSON.stringify(obj)).toEqual('{}');
    expect(obj[hoge]).toEqual('hoge');
  });
});
