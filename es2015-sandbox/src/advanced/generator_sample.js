// 非同期制御を行うための関数
const async = (gen) => {
  const recursive = (response) => {
    gen.next(response).value.then(recursive);
  };
  gen.next().value.then(recursive);
};

describe('ジェネレータに慣れる', () => {
  it('フィボナッチ', () => {
    // ジェネレータでフィボナッチ数列を作る
    // 引数の数だけ数列の個数を返す,フィボナッチ数列のジェネレータ
    const fibgen = function * (count) {
      let i = 0;
      let [current, previous] = [1, 0];
      while (i < count) {
        yield current;
        [current, previous] = [current + previous, current];
        i++;
      }
    };
    const fib = fibgen(10);
    const fibArray = [];
    for (let value of fib) {
      fibArray.push(value);
    }
    expect(fibArray).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it('非同期制御その１', (done) => {
    // ユーザIDとユーザ名を取得する非同期処理
    const getUser = () => {
      return new Promise(
        (resolve) => {
          setTimeout(function() {
            resolve({
              id: '01',
              name: 'Yamada Taro'
            });
          }, 100);
        }
      );
    };

    // ユーザIDのステータスを取得する非同期処理
    const getStatus = (userId) => {
      return new Promise(
        (resolve) => {
          setTimeout(function() {
            if (userId === '01') {
              resolve({
                status: 'GOOD'
              });
            }
          }, 100);
        }
      );
    };

    function * main() {
      const user = yield getUser();
      const userStatus = yield getStatus(user.id);
      expect(userStatus.status).toEqual('GOOD');
      done();
    }

    async(main());
  });

  it('非同期制御その２', (done) => {
    // 重い処理
    // i:Heavy Complete
    const heavy = (i) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`${i}:Heavy Complete`);
        }, 10);
      });
    };

    // 軽い処理
    // i:Right Complete
    const right = (i) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`${i}:Right Complete`);
        }, 1);
      });
    };

    // 重かったり軽かったりする処理
    // i:Random Complete
    const random = (i) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`${i}:Random Complete`);
        }, Math.random() * 20);
      });
    };
    // メッセージの出力順序
    const expectMessages = [];
    expectMessages.push('0:Right Complete');
    expectMessages.push('0:Heavy Complete');
    expectMessages.push('0:Random Complete');
    expectMessages.push('1:Right Complete');
    expectMessages.push('1:Heavy Complete');
    expectMessages.push('1:Random Complete');
    expectMessages.push('2:Right Complete');
    expectMessages.push('2:Heavy Complete');
    expectMessages.push('2:Random Complete');
    expectMessages.push('3:Right Complete');
    expectMessages.push('3:Heavy Complete');
    expectMessages.push('3:Random Complete');
    expectMessages.push('4:Right Complete');
    expectMessages.push('4:Heavy Complete');
    expectMessages.push('4:Random Complete');

    const actualMessages = [];
    function * main() {
      for (var i = 0; i < 5; ++i) {
        const rightMessage = yield right(i);
        actualMessages.push(rightMessage);
        const heavyMessage = yield heavy(i);
        actualMessages.push(heavyMessage);
        const randomMessage = yield random(i);
        actualMessages.push(randomMessage);
      }
      expect(actualMessages).toEqual(expectMessages);
      done();
    }

    async(main());
  });
});
