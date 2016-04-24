// see ./module/export
// デフォルトモジュールをインポートする
import defaultModule from './module/export';
// barをインポートする
import { bar } from './module/export';
// foo,baz,Hoge,fugaをインポートする
import { foo, baz, Hoge, fuga } from './module/export';

describe('importの確認', () => {
  it('exportされたモジュールを利用する', () => {
    // インポートされたか確認
    expect(defaultModule()).toEqual('defaultModule');
    expect(foo.foo).toEqual('foo');
    expect(bar()).toEqual('bar');
    expect(baz).toEqual(1);
    var hoge = new Hoge();
    expect(hoge.hoge).toEqual('hoge');
    expect(fuga).toEqual([1, 2, 3, 4]);
  });
});
