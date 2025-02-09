function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m]
    }

    nums1.sort((a, b) => a - b);
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

class RandomizedSet {
    private array: number[];
    private validValues: number[];
    private validValuesMap: Map<number, number>;  // Store value and its index in validValues
    private filled: number = 0;
    private capacity: number = 10;

    constructor() {
        this.array = new Array(this.capacity).fill(null);
        this.validValues = [];
        this.validValuesMap = new Map();  // Initialize the map
    }

    private get Ratio() {
        return this.filled / this.capacity;
    }

    private Resize() {
        let newCapacity = this.capacity * 2;

        const newArray = new Array(newCapacity).fill(null);

        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] !== null) {
                let val = this.array[i];
                let index = this.hash(val);

                for (let j = 0; j < newCapacity; j++) {
                    const newI = (index + j) % newCapacity;
                    if (newArray[newI] === null) {
                        newArray[newI] = val;
                        break;
                    }
                }
            }
        }

        this.array = newArray;
        this.capacity = newCapacity;
    }

    public insert(val: number): boolean {
        if (this.Ratio > 0.7) this.Resize();

        let index = this.hash(val);

        for (let i = 0; i < this.capacity; i++) {
            const newI = (index + i) % this.capacity;
            if (this.array[newI] === null) {
                this.array[newI] = val;
                this.filled++;

                this.validValues.push(val);
                this.validValuesMap.set(val, this.validValues.length - 1);

                return true;
            }

            if (this.array[newI] === val) {
                return false;
            }
        }

        return false;
    }

    public remove(val: number): boolean {
        let index = this.hash(val);

        for (let i = 0; i < this.capacity; i++) {
            const newI = (index + i) % this.capacity;
            if (this.array[newI] === val) {
                this.array[newI] = null;
                this.filled--;

                const idx = this.validValuesMap.get(val);
                if (idx !== undefined) {
                    const lastValue = this.validValues[this.validValues.length - 1];
                    this.validValues[idx] = lastValue;
                    this.validValuesMap.set(lastValue, idx);

                    this.validValues.pop();
                    this.validValuesMap.delete(val);
                }

                return true;
            }

            if (this.array[newI] === null) {
                break;
            }
        }

        return false;
    }

    public getRandom(): number {
        if (this.validValues.length === 0) throw new Error("No elements in the set.");

        const randomIndex = Math.floor(Math.random() * this.validValues.length);
        return this.validValues[randomIndex];
    }

    private hash(val: number): number {
        return (val % this.capacity + this.capacity) % this.capacity;
    }
}

function lengthOfLastWord(s: string): number {
    var split = s.trim().split(" ");
    var lastWord = split[split.length - 1];
    return lastWord.length;
};

function longestCommonPrefix(strs: string[]): string {
    let str = "";
    let i = 0;
    while (true) {
        if (i >= strs[0].length) return str;
        var toLookFor = strs[0][i];
        for (const word of strs) {
            if (i >= word.length || toLookFor != word[i]) return str;
        }
        str += toLookFor;
        i++;
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
removeElement([3, 2, 2, 3], 3);
removeDuplicates([1, 1, 2]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
maxProfit([7, 1, 5, 3, 6, 4]);
romanToInt("MCMXCIV");
lengthOfLastWord("   fly me   to   the moon  ");
longestCommonPrefix(["flower", "flow", "flight"]);

var hash = new RandomizedSet();
console.log(hash.insert(-1));
console.log(hash.remove(-2));
console.log(hash.insert(-2));
console.log(hash.remove(-1));
console.log(hash.insert(-2));
