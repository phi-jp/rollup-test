var rollup = require('rollup');


var build = async () => {
  var bundle = await rollup.rollup({
    input: ['a.js', 'b.js'],
  });

  var hoge = await bundle.generate({
    format: 'esm',
  });

  console.log(hoge);

  bundle.write({
    format: 'cjs',
    dir: 'hoge/aaa.js',
    // file: 'boo.js',
    // dest: 'hoge/hogehogehoge.js',
  });
};

build();