xdescribe('その他のAPIとかシンタックスとか', () => {
  it('Map', () => {
    // Mapの宣言
    const map = new Map();
    // キーをオブジェクトで宣言
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

    // Mapの走査
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
    // Setの宣言
    const set = new Set();
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

  it('Object assign', () => {
    const target = {
      name: 'abc'
    };
    const greeting = {
      greeting: 'Hello'
    };
    // targetにマージする
    Object.assign(target, greeting);
    expect(target.name).toEqual('abc');
    expect(target.greeting).toEqual('Hello');
  });

  it('Objectシンタックス', () => {
    const name = 'Yamada';
    const obj = {
      name,
      getName() {
        return this.name;
      }
    };

    expect(obj.getName()).toEqual('Yamada');
    expect(obj.name).toEqual('Yamada');
  });
});
