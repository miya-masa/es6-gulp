// 非同期制御を行うための関数
const async = (gen) => {
  // TODO
};

xdescribe('ジェネレータに慣れる', () => {
  it('フィボナッチ', () => {
    // ジェネレータでフィボナッチ数列を作る
    // 引数の数だけ数列の個数を返す,フィボナッチ数列のジェネレータ
    const fibgen = function * (count) {
      // TODO 
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
      //TODO
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
      //TODO
      done();
    }

    async(main());
  });
});
