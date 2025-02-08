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

function longestConsecutive(nums: number[]): number {
    var set = new Set(nums);

    var longest = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            var localCount = 1;
            var j = num + 1;
            while (set.has(j)) {
                console.log(j)
                j++;
                localCount++;
            }
            if (localCount > longest) longest = localCount;
        }
    }

    return longest;
};

canConstruct("aa", "aab");
longestConsecutive([100, 4, 200, 1, 3, 2]);