function longestPalindromicSubstring(s) {
    if (s.length < 1) return "";

    let start = 0; // Start index of the longest palindromic substring
    let end = 0;   // End index of the longest palindromic substring

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);     // For odd-length palindromes
        const len2 = expandAroundCenter(s, i, i + 1); // For even-length palindromes
        const len = Math.max(len1, len2);

        if (len > end - start) {
            // Update the start and end indices of the longest palindrome found so far
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1); // Extract and return the longest palindromic substring
}

function expandAroundCenter(s, left, right) {
    // Helper function to expand around a center and find the length of a palindrome
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Example usage:
const input1 = "babad";
const input2 = "cbbd";
const input3 = "Racecar";
const input4 = "racecar";

console.log(longestPalindromicSubstring(input1));
console.log(longestPalindromicSubstring(input2));
console.log(longestPalindromicSubstring(input3));
console.log(longestPalindromicSubstring(input4));
