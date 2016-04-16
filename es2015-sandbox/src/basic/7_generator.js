describe('Generator', () => {
  it('Basic', () => {

    const gen = function*() {
      yield  1;
      yield  2;
    }
    const it = gen();
    const first = it.next();
    expect(first.value).toEqual(1);
    expect(first.done).toBeFalsy();

    const second = it.next();
    expect(second.value).toEqual(2);
    expect(second.done).toBeFalsy();

    const third = it.next();
    expect(third.value).toBeUndefined();
    expect(third.done).toBeTruthy();

  });

  it('ForOf', () => {
    const gen = function*(num) {
      for (var i = 0; i < num; ++i) {
        yield i;
      }
    };

    const actual = [];
    for (let num of gen(5)) {
      actual.push(num);
    }
    expect(actual).toEqual([0, 1, 2, 3, 4]);
  });

  it('Args', () => {
    const gen = function*(num) {
      for (var i = 0; i < num; ++i) {
        const b = yield i;
        expect(b).toEqual(i + 5);
      }
    };
    const it = gen(3);

    const first = it.next();
    expect(first.value).toEqual(0);

    const second = it.next(5);
    expect(second.value).toEqual(1);

    const third = it.next(6);
    expect(third.value).toEqual(2);

    const forth = it.next(7);
    expect(forth.value).toBeUndefined();
  });
});
