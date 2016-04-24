// see ./module/export
// デフォルトモジュールをインポートする
// TODO ./module/export からデフォルトモジュールをインポート
// barをインポートする
// TODO ./module/export から"bar"をインポート
// foo,baz,Hoge,fugaをインポートする
// TODO ./module/export から"foo,baz,Hoge,fuga"を一気にインポートする
import { foo, baz, Hoge, fuga } from './module/export';

xdescribe('importの確認', () => {
  it('exportされたモジュールを利用する', () => {
    // インポートされたか確認
    expect(defaultModule()).toEqual( /* TODO */ );
    expect(foo.foo).toEqual( /* TODO */ );
    expect(bar()).toEqual( /* TODO */ );
    expect(baz).toEqual( /* TODO */ );
    var hoge = new Hoge();
    expect(hoge.hoge).toEqual( /* TODO */ );
    expect(fuga).toEqual( /* TODO */ );
  });
});
