using System.Numerics;

public class TwoPointersProblems
{
    public bool IsSubsequence(string s, string t)
    {
        var sIndex = 0;
        var tIndex = 0;

        while (sIndex < s.Length && tIndex < t.Length)
        {
            if (s[sIndex] == t[tIndex])
            {
                sIndex++;
            }

            tIndex++;
        }

        return sIndex == s.Length;
    }

    public int[] TwoSum(int[] numbers, int target)
    {
        var i_start = 0;
        var i_end = numbers.Length - 1;

        while (i_end > i_start)
        {
            var sum = numbers[i_end] + numbers[i_start];
            if (sum == target) return new int[] { i_start + 1, i_end + 1 };
            if (sum < target) i_start++;
            else i_end--;
        }

        return new int[2];
    }

    public int MaxArea(int[] height)
    {
        var p_start = 0;
        var p_end = height.Length - 1;
        var biggestArea = 0;

        while (p_start < p_end)
        {
            var s_value = height[p_start];
            var e_value = height[p_end];

            var x = p_end - p_start;
            var y = s_value > e_value ? e_value : s_value;
            if (x * y > biggestArea) biggestArea = x * y;

            if (s_value > e_value)
            {
                p_end--;
            }
            else
            {
                p_start++;
            }
        }

        return biggestArea;
    }

    //TODO: WIP
    public IList<IList<int>> ThreeSum(int[] nums)
    {
        var result = new List<IList<int>>();
        var frequencyDict = nums
            .GroupBy(x => x)
            .ToDictionary(g => g.Key, g => g.Count());

        for (int i = 0; i < nums.Length; i++)
        {
            var expectedSum = 0 - nums[i];
            for (int j = i + 1; j < nums.Length; j++)
            {
                var toLook = expectedSum - nums[j];

                if (frequencyDict.TryGetValue(toLook, out int value))
                {
                    if (value == nums[i] && value < 2) continue;
                    if (value == nums[j] && value < 2) continue;
                    if (value == nums[j] && value == nums[i] && value < 3) continue;

                    result.Add(new List<int> { nums[i], nums[j], toLook });
                }
            }
        }

        return result;
    }
}