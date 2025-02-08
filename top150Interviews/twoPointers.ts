function isPalindrome(s: string): boolean {
    var formatted = s.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase();

    var floorMid = Math.floor(formatted.length / 2);

    var end = formatted.length - 1;
    var start = 0;
    var valid = true;
    while (end >= floorMid && start < floorMid && valid) {
        if (formatted[start] != formatted[end]) valid = false;

        start++;
        end--;
    }

    console.log(formatted);

    return valid;
};


isPalindrome("A man, a plan, a canal: Panama");