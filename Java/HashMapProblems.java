package Java;

import java.util.HashMap;
import java.util.Map;

public class HashMapProblems {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;

        HashMap<Character, Integer> stringMapS = new HashMap<>();
        HashMap<Character, Integer> stringMapT = new HashMap<>();

        for (char ch : s.toCharArray()) {
            if (stringMapS.containsKey(ch)) {
                Integer count = stringMapS.get(ch);
                stringMapS.put(ch, count + 1);
            } else {
                stringMapS.put(ch, 1);
            }
        }

        for (char ch : t.toCharArray()) {
            if (stringMapT.containsKey(ch)) {
                Integer count = stringMapT.get(ch);
                stringMapT.put(ch, count + 1);
            } else {
                stringMapT.put(ch, 1);
            }
        }

        for (Map.Entry<Character, Integer> entry : stringMapS.entrySet()) {
            if (!stringMapT.containsKey(entry.getKey()))
                return false;

            if (!stringMapT.get(entry.getKey()).equals(entry.getValue()))
                return false;
        }

        return true;
    }

    public boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length())
            return false;

        HashMap<Character, Character> mapST = new HashMap<>();
        HashMap<Character, Character> mapTS = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char cS = s.charAt(i);
            char cT = t.charAt(i);

            if (mapST.containsKey(cS) && mapST.get(cS) != cT)
                return false;
            if (mapTS.containsKey(cT) && mapTS.get(cT) != cS)
                return false;

            mapST.put(cS, cT);
            mapTS.put(cT, cS);
        }
        return true;
    }

    public boolean wordPattern(String pattern, String s) {
        String[] words = s.split(" ");
        char[] patternArray = pattern.toCharArray();

        if (pattern.length() != words.length)
            return false;

        HashMap<Character, String> map1 = new HashMap<>();
        HashMap<String, Character> map2 = new HashMap<>();

        for (int i = 0; i < patternArray.length; i++) {
            if (map1.containsKey(patternArray[i]) && !map1.get(patternArray[i]).equals(words[i]))
                return false;

            if (map2.containsKey(words[i]) && !map2.get(words[i]).equals(patternArray[i]))
                return false;

            map1.put(patternArray[i], words[i]);
            map2.put(words[i], patternArray[i]);
        }

        return true;
    }

    public int[] twoSum(int[] nums, int target) {
        int[] results = new int[2];
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            int toFind = target - nums[i];

            if (map.containsKey(toFind) && i != map.get(toFind)) {
                return new int[] { i, map.get(toFind) };
            }

            map.put(nums[i], i);
        }

        return results;
    }
}
