// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let windowCharsMap = {};
    let startChar = 0;
    let maxLength =0;
    for (i = 0; i < s.length; i++ ){
        let endChar = s[i];
        if(windowCharsMap[endChar] >= startChar){
            startChar = windowCharsMap[endChar] + 1;
        }
        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - startChar + 1);

    }
    return maxLength
}

module.exports = lengthOfLongestSubstring;
