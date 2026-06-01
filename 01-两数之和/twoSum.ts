/**
 * leetcode01 - 两数之和，题目要求如下：
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那两个整数，
 * 并返回它们的数组下标。你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 */

// 解法1: 暴力双重循环（时间复杂度 O(n2), 空间复杂度 O(1) ）
function twoSum01(nums: number[], target: number): Array<number> {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target){
                return [i,j]
            }
        }        
    }
    return []
}

// 解法2: 哈希表 (时间复杂度 O(n), 空间复杂度 O(n)), 采用空间换时间
function twoSum02(nums: number[], target: number): Array<number> {
    const hashMap = new Map<number, number>()
    for (const [index, value] of nums.entries()) {
        const a = target - value
        if (hashMap.has(a)){
            return [hashMap.get(a) as number, index]
        } else {
            hashMap.set(value, index)
        }
    }
    return []
}