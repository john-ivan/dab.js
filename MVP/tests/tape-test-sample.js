const test = require('tape'); 
const stressTest = require('/Users/john-ivan/Documents/Codesmith/Production-Project-dAB.js/dab.js/MVP/src/stressTest.js');

test('should return all odd numbers in an array', function (t) {
	t.deepEqual(stressTest.filter([1, 2, 3, 4, 5, 6], num => num % 2 !== 0),  [1, 3, 5], 'Error: should return all odd numbers in an array');
	t.end();
});

test('should filter all odd values in obj', function (t) {
	t.deepEqual(stressTest.filter({a:1, b:2, c:3, d:4}, (value, key, collection) => value % 2 !== 0),  {a:1, c:3}, 'Error: should filter all odd values in obj');
	t.end();
});

test('should filter all odd values in obj', function (t) {
	t.deepEqual(stressTest.filter({a:1, b:2, c:3, d:4}, (value, key, collection) => value % 2 !== 0),  {a:1, c:3}, 'Error: should filter all odd values in obj');
	t.end();
});

test('should not mutate the input array', function (t) {
	numbers = [1, 2, 3, 4];
duplicatedThroughFilter = stressTest.filter(numbers, () => true);
	t.notEqual(stressTest.filter(numbers, () => true),  duplicatedThroughFilter, 'Error: should not mutate the input array');
	t.end();
});

test('memoize', function (t) {
	let fib, fastFib, timeCheck, fastTimeCheck, add, fastAdd, wait
	    fib = (n) => (n < 2) ? n : fib(n - 1) + fib(n - 2);
	    fastFib = stressTest.memoize(fib);
	    timeCheck = (str) => str + Date.now();
	    fastTimeCheck = stressTest.memoize(timeCheck);
	    add = (a, b, c) => a + b + c;
	    fastAdd = stressTest.memoize(add);

	// Synchronous sleep: terrible for web development, awesome for testing memoize
	    wait = (t) => {
	      const start = Date.now();
	      while ((Date.now() - start) < t) 'wait';
	    };

			let firstTime = timeCheck('shazaam!');
			    wait(5);
			let secondTime = fastTimeCheck('shazaam!');
			    wait(5);

	t.equal(fib(10),  55, 'Error: memoize');
	t.equal(fastFib(10),  55, 'Error: memoize');
	t.notEqual(fastFib(10),  fastFib(7), 'Error: memoize');
	t.notEqual(firstTime,  secondTime, 'Error: memoize');
	t.equal(fastTimeCheck('shazaam!'),  secondTime, 'Error: memoize');
	t.equal(add(10,5,4),  19 , 'should accept multiple args');
	t.equal(fastAdd(10, 5, 4),  19 , 'should accept multiple args');
	firstTime = timeCheck({ foo: 'bar' });
	wait(5);
 	secondTime = fastTimeCheck({ foo: 'bar' });
	wait(5);

	t.notEqual(firstTime,  secondTime, 'Error: memoize');
	t.deepEqual(fastTimeCheck({foo:'bar'}),  secondTime, 'Error: memoize');
	t.notEqual(fastTimeCheck({foo:'bar'}),  fastTimeCheck({different: 'result'}), 'Error: memoize');
	t.end();
});

test('should reverse multiple properties', function (t) {
	t.deepEqual(stressTest.reverseObject({a:1,b:2}),  {'1':'a','2':'b'}, 'Error: should reverse multiple properties');
	t.end();
});
