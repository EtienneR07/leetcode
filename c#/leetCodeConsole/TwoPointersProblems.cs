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
        return 0;
    }
}