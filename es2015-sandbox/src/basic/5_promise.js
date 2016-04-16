const delay = (isReject = false) => new Promise((resolve, reject) => {

  setTimeout(() => {
    if (isReject) {
      reject('rejected');
    } else {
      resolve('resolved');
    }
  }, 1000);
  jasmine.clock().tick(100000);
});

describe('Promise', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('Basic', (done) => {
    delay()
      .then((arg) => {
        expect(arg).toEqual('resolved');
        done();
      });
  });

  it('Calls', (done) => {
    delay()
      .then((arg) => {
        expect(arg).toEqual('resolved');
        return delay();
      })
      .then((arg) => {
        expect(arg).toEqual('resolved');
        done();
      });

    jasmine.clock().tick(100000);
  });

  it('Reject', (done) => {
    delay()
      .then((arg) => {
        expect(arg).toEqual('resolved');
        return delay(true);
      })
      .then((arg) => {
        throw new Error();
      }, (arg) => {
        expect(arg).toEqual('rejected');
        done();
      });
  });

  it('All', (done) => {
    Promise.all([
      delay(),
      delay(),
      delay()
    ]).then(arg => {
      expect(arg).toEqual(['resolved', 'resolved', 'resolved']);
      done();
    });
  });
});
