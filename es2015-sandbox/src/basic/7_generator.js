describe('ジェネレータ', () => {
  it('基本', () => {
    // ジェネレータの作成
    const gen = function * () {
      yield 1;
      yield 2;
    };

    // ジェネレータを呼び出し
    const it = gen();

    // nextで次まですすめる
    const first = it.next();

    // valudで中身の確認
    expect(first.value).toEqual(1);
    // doneで終了したかどうかを確認
    expect(first.done).toBeFalsy();

    const second = it.next();
    expect(second.value).toEqual(2);
    expect(second.done).toBeFalsy();

    const third = it.next();
    expect(third.value).toBeUndefined();
    expect(third.done).toBeTruthy();
  });

  it('generatorのforOf', () => {
    // 引数の回数分繰り返すジェネレータ
    const gen = function * (num) {
      for (var i = 0; i < num; ++i) {
        yield i;
      }
    };

    const actual = [];
    // for of （For Of もEcmascript2015から利用可能）
    for (let num of gen(5)) {
      actual.push(num);
    }
    expect(actual).toEqual([0, 1, 2, 3, 4]);
  });

  it('ジェネレータに引数を返す', () => {
    const gen = function * (num) {
      for (var i = 0; i < num; ++i) {
        // 処理系から引数をもらう
        const b = yield i;
        expect(b).toEqual(i + 5);
      }
    };
    const it = gen(3);

    // 初回は開始なので値を無し
    const first = it.next();
    expect(first.value).toEqual(0);

    // nextの引数でジェネレータ内に値を渡す
    const second = it.next(5);
    expect(second.value).toEqual(1);

    const third = it.next(6);
    expect(third.value).toEqual(2);

    const forth = it.next(7);
    expect(forth.value).toBeUndefined();
  });
});
