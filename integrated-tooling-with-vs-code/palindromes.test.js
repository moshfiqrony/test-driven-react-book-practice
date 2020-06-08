const palindromes = require('./palindromes')

describe(
    'palindrome() test',
    () => {
        test('correctly identify a word is palindromes', () => {
            expect(palindromes('madam')).toEqual(['madam']);
        })
    }
)