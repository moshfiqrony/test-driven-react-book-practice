const palindromes = require('./palindromes')

const {isPalindrome, prepareStr, stringStartPalindrome} = palindromes

describe(
    'palindrome() test',
    () => {
        test('correctly identify a word is palindromes', () => {
            expect(palindromes('madam')).toEqual(['madam']);
        })
    }
)


describe('prepareStr()', () => {
    test('converts all to lower case', () => {
        expect(prepareStr('aAaA')).toBe('aaaa');
    })

    test('remove all non-letter characters', () => {
        expect(prepareStr('To infinity, and beyond!')).toBe('toinfinityandbeyond');
    })
})



describe('isPalindrome()', () => {
    test('returns true when given a palindrome', () => {
        expect(isPalindrome('aba')).toBe(true);
        expect(isPalindrome('abba')).toBe(true);
    })

    test('returns false when given a non palindrome', () => {
        expect(isPalindrome('abb')).toBe(false);
        expect(isPalindrome('aaba')).toBe(false);
    })
})


describe('stringStartPalindrome()', () => {
    test('returns longest palindrome at the start of the string', () => {
        expect(stringStartPalindrome('wow')).toBe('wow')
        expect(stringStartPalindrome('ahha')).toBe('ahha')
        expect(stringStartPalindrome('hohoho')).toBe('hohoh')
    })

    test('returns null if no length 3+ palindrome starts the string', () => {
        expect(stringStartPalindrome('ww')).toBe(null)
        expect(stringStartPalindrome('abcda')).toBe(null)
        expect(stringStartPalindrome('bananarama')).toBe(null)
    })
})


describe('palindrome()', () => {
    test('correctly identifies one-word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam']);
        expect(palindromes('racecar')).toEqual(['racecar'])
    })


    test('return empty array when given no palindromes', () => {
        expect(palindromes('tic tac toe')).toEqual([]);
    })


    test('ignores punctuation', () => {
        expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
    })

    test('detect multiple palindrome', () => {
        expect(palindromes('A man, a plan, a canal, panama')).toEqual(['amanaplanacanalpanama']);
    })
})