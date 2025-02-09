function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m]
    }

    nums1.sort((a, b) => a - b);

    console.log(nums1);
};

function removeElement(nums: number[], val: number): number {
    var k = 0;
    var indexes = [];
    for (const { index, value } of nums.map((value, index) => ({ index, value }))) {
        if (value == val) {
            indexes.push(index);
            continue;
        }

        k++;
    }

    for (const index of indexes.reverse()) {
        nums.splice(index, 1);
    }

    return k;
};

function removeDuplicates(nums: number[]): number {
    var k = 0;
    let set = new Set<number>();
    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) {
            nums.splice(i, 1);
            continue;
        }

        k++;
        set.add(nums[i]);
    }

    return k;
};

function majorityElement(nums: number[]): number {
    let winner = 0, count = 0;

    for (const num of nums) {
        if (count === 0) {
            winner = num;
        }
        count += (num === winner) ? 1 : -1;
    }

    return winner;
};

function maxProfit(prices: number[]): number {
    var maxProfit = 0;
    var smallest = 0
    for (let i = 0; i < prices.length; i++) {
        if (i == 0) {
            smallest = prices[i];
            continue;
        }

        if (prices[i] - smallest > maxProfit) maxProfit = prices[i] - smallest;
        if (prices[i] < smallest) smallest = prices[i];
    }

    return maxProfit;
};

function romanToInt(s: string): number {
    var doubles = new Map<string, number>([
        ["IV", 4],
        ["IX", 9],
        ["XL", 40],
        ["XC", 90],
        ["CD", 400],
        ["CM", 900],
    ]);
    var singles = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);

    var addArray = [];

    var i = 0;
    while (i < s.length) {
        if (i + 1 < s.length) {
            var twoChar = `${s[i]}${s[i + 1]}`;

            if (doubles.has(twoChar)) {
                addArray.push(doubles.get(twoChar));
                i = i + 2;
                continue;
            }

            addArray.push(singles.get(s[i]));
            i++;
        } else {
            addArray.push(singles.get(s[i]));
            i++;
        }
    }

    var add = addArray.reduce((prev, curr) => curr + prev);

    return add;
};

function lengthOfLastWord(s: string): number {
    var split = s.trim().split(" ");
    console.log(split);
    var lastWord = split[split.length - 1];
    return lastWord.length;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
removeElement([3, 2, 2, 3], 3);
removeDuplicates([1, 1, 2]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
maxProfit([7, 1, 5, 3, 6, 4]);
romanToInt("MCMXCIV");
lengthOfLastWord("   fly me   to   the moon  ");