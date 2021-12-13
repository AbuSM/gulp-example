const {series, parallel} = require('gulp');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function printHello() {
    console.log('hello world!')
}

function parallelFunctionOne(done) {
    console.log('Parallel 1');
    done();
}

function parallelFunctionTwo(done) {
    console.log('Parallel 2');
    done();
}


exports.parallel = parallel(parallelFunctionOne, parallelFunctionTwo);
exports.printHello = printHello()
exports.default = series(printHello, defaultTask);
