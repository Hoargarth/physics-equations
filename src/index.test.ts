import * as Test from './index';

test('first simple test', () => {
    expect(Test.helloTest()).toBe('hello');
});

test('second simple test', () => {
    expect(Test.secondTest()).toBe('second');
});