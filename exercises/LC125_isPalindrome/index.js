function isPalindrome(s) {
    var s = s.toLowCase().replace(/[\W_]/g , "");
    left = 0;
    rigth = s.length - 1;
    while (right > left){
        if (s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    return true;
}

export default isPalindrome;