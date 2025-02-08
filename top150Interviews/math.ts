function isNumberPalindrome(x: number): boolean {
    var str = x.toString();
    console.log(str)
    var valid = true;

    var end_p = str.length - 1;
    var start_p = 0;
    while (start_p < end_p) {
        if (str[end_p] != str[start_p]) {
            valid = false;
            break;
        }

        end_p--;
        start_p++;
    }

    return valid;
};

isNumberPalindrome(121);