
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
    return input.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };

describe("capitalize words", () =>{
    test('should capitalize the first letter of each word in a standard sentence(AKA normal case)', () => {
    const input = "hello world";
    const expected = "Hello World";
    expect(capitalizeWords(input)).toBe(expected);
    });

    test("An empty string input: ", () =>{
        expect(capitalizeWords("")).toBe("");
    });

    test("String with special characters: ", () =>{
        expect(capitalizeWords("hello-world")).toBe("Hello-World");
    });


    test("Test for single-world strings: ", () => {
        expect(capitalizeWords("s")).toBe("S");
    });
});

describe("Filter active users: ", () =>{
    test("An array with mixed active/inactive users", () => {
        const usersTest = [
            { name: "Alice", isActive: true},
            { name: "Bob", isActive: false}
        ];
        const expectedResult = [{ name: "Alice", isActive: true}];
        expect(filterActiveUsers(usersTest)).toEqual(expectedResult);
    });
    
    test('returns an empty array when all users are inactive', () => {
        const users = [
            { name: "Alice", isActive: false},
            { name: "Bob", isActive: false},
        ];
        const expected = [];
        expect(filterActiveUsers(users)).toEqual(expected);
    });

    test("An empty array being passed as an argument", () => {
        const emptyArray = [];
        const emptyResult = [];
        expect(filterActiveUsers(emptyArray)).toEqual(emptyResult);
    });
});