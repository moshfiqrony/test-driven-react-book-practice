const findMe = require('./index')
const greeting = greet => `Hello ${greet}!`;


describe('greeting()', () => {
    test('say hello', () => {
        expect(greeting('Rony')).toBe('Hello Rony!');
    })
})

describe('divided by 3 and 5 or not', () => {
    test('test case true', () => {
        expect(findMe(15)).toBe('Moshfiq Rony');
    })

    test('test case true 2', () => {
        expect(findMe(30)).toBe('Moshfiq Rony');
    })

    test('test case true 3', () => {
        expect(findMe(45)).toBe('Moshfiq Rony');
    })

    test('test case false 1', () => {
        expect(findMe(16)).not.toBe('Moshfiq Rony');
    })

    test('test case false 2', () => {
        expect(findMe(70)).not.toBe('Moshfiq Rony');
    })

    test('test case false 3', () => {
        expect(findMe(50)).not.toBe('Moshfiq Rony');
    })

    test('test case true divided by 5', () => {
        expect(findMe(100)).toBe('Rony');
    })
    test('test case true divided by 3', () => {
        expect(findMe(9)).toBe('Moshfiq');
    })
})