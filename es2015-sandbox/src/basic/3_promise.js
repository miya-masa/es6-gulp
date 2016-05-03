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

const delay1 = () => delay({
  milles: 1,
  resolvedMessage: 'comp1'
});

const delay2 = () => delay({
  milles: 2,
  resolvedMessage: 'comp2'
});

const delay3 = () => delay({
  milles: 3,
  resolvedMessage: 'comp3'
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
    // delayを呼び出した後のPromiseでメッセージを確認する。
    delay({})
      .then((arg) => {
        expect(arg).toEqual('resolved');
      })
      .then(done, done);
  });

  it('コールのチェーン', (done) => {
    // delayを２回呼び出す。
    delay({})
      .then((arg) => {
        expect(arg).toEqual('resolved');
        return delay({});
      })
      .then((arg) => {
        expect(arg).toEqual('resolved');
      })
      .then(done, done);

    jasmine.clock().tick(100000);
  });

  it('コールのチェーン２', (done) => {
    // delayを３回呼び出す。
    delay({})
      .then((arg) => {
        expect(arg).toEqual('resolved');
        // Promise返し
        return delay({});
      })
      .then((arg) => {
        expect(arg).toEqual('resolved');
        // 通常オブジェクト返し
        return 'Hello World';
      })
      .then((arg) => {
        expect(arg).toEqual('Hello World');
      })
      .then(done, done);

    jasmine.clock().tick(100000);
  });

  it('Reject時のキャッチ', (done) => {
    // delay => tyenでisReject = trueで再度delay => もう一度then => 最後にキャッチ
    delay({})
      .then((arg) => {
        expect(arg).toEqual('resolved');
        return delay({
          isReject: true
        });
      })
      .then(() => {
        throw new Error();
      })
      .catch((arg) => {
        expect(arg).toEqual('rejected');
      })
      .then(done, done);
  });

  it('All.複数の非同期処理で同期を取る', (done) => {
    // delay1,delay2,delay3を一気に呼び出し、全部終わったらそれぞれの結果を確認してみる。
    Promise.all([
      delay1(),
      delay2(),
      delay3()
    ])
      .then((arg) => {
        expect(arg).toEqual(['comp1', 'comp2', 'comp3']);
        done();
      });
  });

  it('race.最初に終了した結果を取得する', (done) => {
    // delay1,delay2,delay3を一気に呼び出し、最初に終わったら結果を確認してみる。
    Promise.race([
      delay1(),
      delay2(),
      delay3()
    ]).then((arg) => {
      expect(arg).toEqual('comp1');
      done();
    });
  });
});
