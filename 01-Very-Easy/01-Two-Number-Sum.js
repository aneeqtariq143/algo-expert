var input = [3, 5, -4, 8, 11, 1, -1, 6];
const TARGET_SUM = 10;

var input2 = [10, -5, -4, 8, 11, 1, -1, 5];
const TARGET_SUM2 = 15;

// 1st Algorithm: o(n^2) time | o(1) space
// Slow Algorithm
// O(n^2) time complexity, Because we are using 2 loop
function algo1 (input, target_sum){
    for(let i = 0; i < input.length; i++){
        let first_number = input[i];
        for (let j = i + 1; j < input.length; j++){
            let second_number = input[j];
            if((first_number + second_number) == target_sum){
                return [first_number, second_number]
            }
        }
    }
    return [];
}

// Example 1: Using Algo 1
console.log('Algo 1 => ', algo1(input, TARGET_SUM));

// Example 2: Using Algo 1
console.log('Algo 1 => ', algo1(input2, TARGET_SUM2));




// 2nd Algorithm: O(n) time | O(n)
//using Hash Table which take more space but run algorithm faster.
// Time Complexity => "O(n)" time Because it iterates loop one time
// Space Complexity => O(n) space Because we are assigning new values to the hashed table

// Current Number = x
// Formula = x + y = 10
// Find the value of Y = ?, so the formula will be "y = 10 - x"

function algo2 (input, target_sum) {
    //Hash Table us special storage where the values are stored against "keys" in an array format, it's
    //like an associative array.
    let hash_table = {};
    for(let i = 0; i < input.length; i++){
        let key = target_sum - input[i];
        if (hash_table.hasOwnProperty(key)){
            return [input[i], key]
        }else{
            hash_table[input[i]] = true;
        }
    }
    return {};
}

// Example 1: Using Algo 2
console.log('Algo 2 => ', algo2(input, TARGET_SUM));

// Example 2: Using Algo 2
console.log('Algo 2 => ', algo2(input2, TARGET_SUM2));


// 3rd Algorithm: O(nlog(n)) time | O(1) space
function algo3 (input, target_sum){
    input.sort(function(a, b){return a-b});
    let left_pointer_index = 0;
    let right_pointer_index = input.length - 1;
    while (left_pointer_index < right_pointer_index){ //To avoid overlap left and right pointer
        let current_sum = input[left_pointer_index] + input[right_pointer_index];
        if(current_sum == target_sum){
            return [input[left_pointer_index], input[right_pointer_index]];
        }else if (current_sum < target_sum){
            left_pointer_index = left_pointer_index + 1;
        }else if (current_sum > target_sum){
            right_pointer_index = right_pointer_index - 1;
        }
    }
    return [];
}

// Example 1: Using Algo 3
console.log('Algo 3 => ', algo3(input, TARGET_SUM));

// Example 2: Using Algo 3
console.log('Algo 3 => ', algo3(input2, TARGET_SUM2));
