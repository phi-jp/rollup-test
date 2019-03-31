var rollup = require('rollup');
var riot = require('rollup-plugin-riot');

var build = async () => {
  var bundle = await rollup.rollup({
    input: ['a.js', 'b.js', 'main.js'],
    // entry: 'main.js',
    plugins: [
      riot({

      }),
    ]
  });

  var hoge = await bundle.generate({
    format: 'esm',
  });

  // console.log(hoge);

  bundle.write({
    format: 'cjs',
    dir: 'dist',
    // file: 'boo.js',
    // dest: 'hoge/hogehogehoge.js',
  });

  // watcher = rollup.watch
};

build();