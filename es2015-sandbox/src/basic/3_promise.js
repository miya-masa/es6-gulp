// デフォルト10ms後に処理を行う関数
// isReject = true で rejectし それ以外で resolve するように実装する
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

xdescribe('Promise', () => {
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
    // メッセージの確認
    //  expect(arg).toEqual('resolved');
    //  done();
    //  Start TODO
    //  コメント外す↓
    //  delay({}).
    //  End TODO
  });

  it('コールのチェーン', (done) => {
    // delayを２回呼び出す。
    // メッセージの確認
    //  expect(arg).toEqual('resolved');
    //  done();
    //  Start TODO
    //  コメント外す↓
    //  delay({}).
    //  End TODO
    jasmine.clock().tick(100000);
  });

  it('Reject時のキャッチ', (done) => {
    // delay => tyenで"isReject = true"で再度delay => もう一度then(通らないはず) => 最後にcatch
    //  Start TODO
    //  コメント外す↓
    //  delay({}).
    //  End TODO
  });

  it('All.複数の非同期処理で同期を取る', (done) => {
    // delay1,delay2,delay3を一気に呼び出し、全部終わったらそれぞれの結果を確認してみる。
    //  delay1()
    //  delay2()
    //  delay3()
    // 確認コード => expect(arg).toEqual(['comp1', 'comp2', 'comp3']);
    //  Start TODO
    //  End TODO
  });

  it('race.最初に終了した結果を取得する', (done) => {
    // delay1,delay2,delay3を一気に呼び出し、最初に終わったら結果を確認してみる。
    //  delay1()
    //  delay2()
    //  delay3()
    // 確認コード => expect(arg).toEqual('comp1');
    //  Start TODO
    //  End TODO
  });
});
