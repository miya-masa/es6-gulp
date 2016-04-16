describe('String Format', () => {
  it('String Format', () => {
    const name = 'Yamada Taro';
    expect(`Hello ${name}`).toBe('Hello Yamada Taro');
  });

  it('Multi Line', () => {
    const name = 'Yamada Taro';
    expect(`Hello
${name}`).toBe('Hello\nYamada Taro');
  });

});
