describe('Other Api', () => {
  it('Map', () => {
    const map = new Map();
    const key = {};
    map.set('hoge', 'hoge');
    map.set(1, 1);
    map.set(key, 'object key');

    expect(map.get('hoge')).toEqual('hoge');
    expect(map.get(1)).toEqual(1);
    expect(map.get('1')).toBeUndefined();
    expect(map.get({})).toBeUndefined();
    expect(map.get(key)).toEqual('object key');

    console.log('~~~~~~~~keys and values~~~~~~~~');
    for (let [key, value] of map) {
      console.log(key);
      console.log(value);
    }

    console.log('~~~~~~~~keys~~~~~~~~');
    for (let key of map.keys()) {
      console.log(key);
    }

    console.log('~~~~~~~~values~~~~~~~~');
    for (let value of map.values()) {
      console.log(value);
    }

  });

  it('Set', () => {
    const set = new Set();
    const key = {};
    set.add(1);
    set.add(1);
    set.add(2);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);
    expect(set.size).toEqual(5);
  });

  it('Proxy', () => {

    const target = {
      name: 'Yamada Taro'
    };

    const proxy = new Proxy(target, {
      get(target, property, receiver) {
        return target[property];
      }
    });

    const name = proxy.name;
    expect(name).toEqual('Yamada Taro');

  });
  //TODO Object.assignを追加する

});
