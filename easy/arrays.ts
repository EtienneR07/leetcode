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

    console.log(nums);

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

    console.log(nums);

    return k;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
removeElement([3, 2, 2, 3], 3);
removeDuplicates([1, 1, 2]);