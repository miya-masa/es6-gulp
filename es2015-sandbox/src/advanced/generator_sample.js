const async = (gen) => {
  const recursive = (response) => {
    gen.next(response).value.then(recursive);
  };
  gen.next().value.then(recursive);
};

describe('ジェネレータに慣れる', () => {

  it('フィボナッチ', () => {

    const fibgen = function*(count) {
      let i = 0;
      let [current, previous] = [1, 0];
      while (i < count) {
        yield current;
        [current, previous] = [current + previous, current]
        i++;
      }
    };

    const fib = fibgen(10);
    for (let value of fib) {
      console.log(value);
    }

  });

  it('非同期制御その１', (done) => {

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

    const getStatus = (userId) => {
      return new Promise(
        (resolve) => {
          setTimeout(function() {
            if (userId === '01') {
              resolve({
                complete: true
              });
            }
          }, 100);
        }
      );
    };

    function* main() {
      const user = yield getUser();
      const userStatus = yield getStatus(user.id);
      done();
    }

    async(main());
  });

  it('非同期制御その２', (done) => {

    const heavy = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Heavy Complete');
        }, 100);
      });
    };

    const right = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Right Complete');
        }, 1);
      });
    };

    const random = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Random Complete');
        }, Math.random() * 10);
      });
    };

    function* main() {
      for (var i = 0; i < 5; ++i) {
        const rightMessage = yield right();
        console.log(`${i}:${rightMessage}`);
        const heavyMessage = yield heavy();
        console.log(`${i}:${heavyMessage}`);
        const randomMessage = yield random();
        console.log(`${i}:${randomMessage}`);
      }
      done();
    }

    async(main());
  });

});
