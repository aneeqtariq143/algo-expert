//Validating Subsequence array is in same order or not.
var main_array = [5, 1, 22, 25, 6, -1, 8, 10, 11, 7];
var validate_subsequence_array = [1, 6, -1, 10];

// 1st Algorithm: O(n) time | O(1) space
// How to:
// 1 => We create a pointer for each array;
// 2 => Then Start iterating "main_array".
// 3 => In each iteration, compare the "main_array" pointer with the "validate_subsequence_array" pointer.
// 4 => If comparison is found then move each pointer forward. and jump to next iteration.
// 5 => if comparison not found, then move "main_array" pointer forward.


// 1st Algorithm: O(n) time | O(1) space
function algo1_validate_subsequence(main_array, validate_subsequence_array){
    let main_array_pointer = 0;
    let validate_subsequence_array_pointer = 0;
    while (main_array_pointer < main_array.length && validate_subsequence_array_pointer < validate_subsequence_array.length){
        if(main_array[main_array_pointer] == validate_subsequence_array[validate_subsequence_array_pointer]){
            validate_subsequence_array_pointer += 1;
        }
        main_array_pointer += 1;
    }
    // If "validate_subsequence_array_pointer" reaches at the end of the "validate_subsequence_array"
    // It means, all subsequence is validated
    return validate_subsequence_array_pointer == validate_subsequence_array.length;
}
console.log('Algo 1 => ', algo1_validate_subsequence(main_array, validate_subsequence_array));

// 2st Algorithm: O(n) time | O(1) space
function algo2_validate_subsequence(main_array, validate_subsequence_array){
    let validate_subsequence_array_pointer = 0;
    for (let i = 0; i < main_array.length; i++){
        if (validate_subsequence_array_pointer == validate_subsequence_array.length){
            break;
        }

        if(main_array[i] == validate_subsequence_array[validate_subsequence_array_pointer]){
            validate_subsequence_array_pointer += 1;
        }
    }
    // If "validate_subsequence_array_pointer" reaches at the end of the "validate_subsequence_array"
    // It means, all subsequence is validated
    return validate_subsequence_array_pointer == validate_subsequence_array.length;
}
console.log('Algo 2 => ', algo2_validate_subsequence(main_array, validate_subsequence_array));