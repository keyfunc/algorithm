package main

/**
 * leetcode01 - 两数之和，题目要求如下：
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那两个整数，
 * 并返回它们的数组下标。你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 */

// 解法1: 暴力双重循环（时间复杂度 O(n2), 空间复杂度 O(1) ）
func twoSum01(nums []int, target int) []int {
	for i, v := range nums {
		for j := i + 1; j < len(nums); j++ {
			subV := nums[j]
			if v+subV == target {
				return []int{
					i, j,
				}
			}
		}
	}
	return []int{}
}

// 解法2: 哈希表 (时间复杂度 O(n), 空间复杂度 O(n)), 采用空间换时间
func twoSum02(nums []int, target int) []int {
	hashMap := make(map[int]int)
	for i, v := range nums {
		if m, ok := hashMap[target-v]; ok {
			return []int{
				i, m,
			}
		} else {
			hashMap[v] = i
		}
	}
	return []int{}
}
