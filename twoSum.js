const twoSum = (nums, target) => {
    let numbers = {}
    for (let i = 0; i < nums.length; i++) {
       let num = nums[i] 
       let numb = target - num
        if (numbers[numb] !== undefined){
            return [numbers[numb], i]
        }
        numbers[num] = i
    }
    return []
    }
    
    let nums = [2,7,11,15]
    let target = 9
    
    console.log(twoSum(nums, target))