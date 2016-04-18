const foo = {
  foo: 'foo'
};
const bar = () => 'bar';
const baz = 1;
const Hoge = class Hoge {
  constructor() {
    this.hoge = 'hoge';
  }
};
const fuga = [1, 2, 3, 4];
// デフォルトモジュールをexport
export default () => 'defaultModule';
// fooをexport
export { foo };
// bar,baz,Hoge,fugaをexport
export { bar, baz, Hoge, fuga };
