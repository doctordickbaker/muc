import MucCore from './src/lib/muc-core';

if (process.argv.length <= 2) {
  console.log('ERROR: Please provide a URL to convert');
  process.exit(-1);
}

let results = []

let b = new MucCore();

b.getAll().then(function(values) {
  console.log(values);
});

b.getAllAsync().then(function(values) {
  console.log(values);
});
