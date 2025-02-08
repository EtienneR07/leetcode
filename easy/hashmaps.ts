function canConstruct(ransomNote: string, magazine: string): boolean {
    var hashMap = new Map<string, number>();
    for (const char of magazine) {
        if (hashMap.has(char)) {
            var count: number = hashMap.get(char);
            hashMap.set(char, count + 1);
            console.log(hashMap);
        } else {
            hashMap.set(char, 1);
            console.log(hashMap);
        }
    }

    console.log(hashMap);

    var valid = true;
    for (const char of ransomNote) {
        if (!hashMap.has(char)) {
            valid = false;
            break;
        }

        var count = hashMap.get(char);
        if (count == 0) {
            valid = false;
            break;
        }

        hashMap.set(char, count - 1);
    }

    return valid;
};

canConstruct("aa", "aab");