const findMe = require('./index')
const greeting = greet => `Hello ${greet}!`;


describe('greeting()', () => {
    test('say hello', () => {
        expect(greeting('Rony')).toBe('Hello Rony!');
    })
})

describe('divided by 3 and 5 or not', () => {
    test('test case true', () => {
        expect(findMe(15)).toBe('Rony')
    })

    test('test case true 2', () => {
        expect(findMe(30)).toBe('Rony')
    })

    test('test case true 3', () => {
        expect(findMe(45)).toBe('Rony')
    })

    test('test case false 1', () => {
        expect(findMe(16)).not.toBe('Rony')
    })

    test('test case false 2', () => {
        expect(findMe(70)).not.toBe('Rony')
    })

    test('test case false 3', () => {
        expect(findMe(50)).not.toBe('Rony')
    })

    test('test case false 4', () => {
        expect(findMe(100)).toBe(100)
    })
})