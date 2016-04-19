// デフォルト10ms後に処理を行う関数
// isReject = true で reject それ以外で resolve するように実装する
// setTimeout(() => {}, ms)
// new Promise((resolve,reject) => {});
const delay = ({isReject = false, millis = 10, resolvedMessage = 'resolved'}) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isReject) {
      reject('rejected');
    } else {
      resolve(resolvedMessage);
    }
  }, millis);
  jasmine.clock().tick(100000);
});

describe('Promise', () => {
  beforeEach(() => {
    // 時間のエミュレータのセットアップ
    jasmine.clock().install();
  });
  afterEach(() => {
    // 時間のエミュレータのリセット
    jasmine.clock().uninstall();
  });

  it('基本', (done) => {
    delay({})
      .then((arg) => {
        expect(arg).toEqual('resolved');
        done();
      });
  });

  it('コールのチェーン', (done) => {
    delay({})
      .then((arg) => {
        expect(arg).toEqual('resolved');
        return delay({});
      })
      .then((arg) => {
        expect(arg).toEqual('resolved');
        done();
      });

    jasmine.clock().tick(100000);
  });

  it('Reject時のキャッチ', (done) => {
    delay({})
      .then((arg) => {
        expect(arg).toEqual('resolved');
        return delay({
          isReject: true
        });
      })
      .then((arg) => {
        throw new Error();
      }).catch(arg => {
      console.log(arg);
      expect(arg).toEqual('rejected');
      done();
    });
  });

  it('All.複数の非同期処理で同期を取る', (done) => {
    Promise.all([
      delay({
        milles: 1,
        resolvedMessage: 'comp1'
      }),
      delay({
        milles: 2,
        resolvedMessage: 'comp2'
      }),
      delay({
        milles: 3,
        resolvedMessage: 'comp3'
      })
    ]).then(arg => {
      expect(arg).toEqual(['comp1', 'comp2', 'comp3']);
      done();
    });
  });

  it('race.最初に終了した結果を取得する', (done) => {
    Promise.race([
      delay({
        milles: 1,
        resolvedMessage: 'comp1'
      }),
      delay({
        milles: 2,
        resolvedMessage: 'comp2'
      }),
      delay({
        milles: 3,
        resolvedMessage: 'comp3'
      })
    ]).then(arg => {
      expect(arg).toEqual('comp1');
      done();
    });
  });
});
