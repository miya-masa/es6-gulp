describe('Destructuring Assignment', () => {
  it('Array', () => {
    const [hoge, foo] = ['hoge', 'foo'];
    expect(hoge).toEqual('hoge');
    expect(foo).toEqual('foo');
  });

  it('Object', () => {
    const {hoge, foo} = {
      foo: 'foo',
      hoge: 'hoge'
    };
    expect(hoge).toEqual('hoge');
    expect(foo).toEqual('foo');
  });

  it('Nest', () => {
    const data = {
      hoge: 'hoge',
      foo: 'foo',
      piyo: {
        fuga: 'fuga'
      }
    };
    const {hoge, foo, piyo, piyo: {fuga}} = data;
    expect(hoge).toEqual('hoge');
    expect(foo).toEqual('foo');
    expect(piyo.fuga).toEqual('fuga');
    expect(fuga).toEqual('fuga');
  });

  it('Variable Name', () => {
    const {hoge:x, foo} = {
      hoge: 'hoge',
      foo: 'foo'
    };
    expect(x).toEqual('hoge');
  });

  it('default', () => {
    const {hoge: x = 'default', foo} = {
      foo: 'foo'
    };
    expect(x).toEqual('default');
  });

});
