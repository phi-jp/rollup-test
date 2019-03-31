var rollup = require('rollup');
var riot = require('rollup-plugin-riot');
var commonjs = require('rollup-plugin-commonjs');
var buble = require('rollup-plugin-buble');

var inputOptions = {
  input: ['a.js', 'b.js', 'main.js'],
  // entry: 'main.js',
  plugins: [
    riot(),
    commonjs(),
    buble()
  ]
};
var outputOptions = {
  format: 'cjs',
  dir: 'dist',
};

var build = async () => {
  var bundle = await rollup.rollup(inputOptions);

  // var hoge = await bundle.generate({
  //   format: 'esm',
  // });

  // console.log(hoge);

  // bundle.write({
  //   format: 'cjs',
  //   dir: 'dist',
  //   // file: 'boo.js',
  //   // dest: 'hoge/hogehogehoge.js',
  // });

  watcher = rollup.watch({
    ...inputOptions,
    output: outputOptions,
  });
  watcher.on('event', event => {
    console.log(event);
  });
};

build();