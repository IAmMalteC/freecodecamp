const palindrome = require('./palindrome');

test('Return true when "eye" is inserted', () => {
    expect(palindrome("eye")).toBe(true);
});

test('Return false when "nope" is inserted', () => {
    expect(palindrome("nope")).toBe(false);
});

test('Return true when "_eye" is inserted', () => {
    expect(palindrome("_eye")).toBe(true);
});

test('Return false when "almostomla" is inserted', () => {
    expect(palindrome("almostomla")).toBe(false);
});


