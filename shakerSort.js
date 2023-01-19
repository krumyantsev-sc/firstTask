function swapNumbers(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
}

function shakerSort(arr) {
	let start = 0;
    let end = arr.length;
    if (end === 0) {
        return arr;
    }
    let swapped = true;
	while (swapped) {
		swapped = false;
		for (let i = start; i < end - 1; i++) { // самый большой вправо
			if (arr[i] > arr[i+1]) {
				swapNumbers(arr, i, i+1);
				swapped = true;
			}
		}
		end--;
		if (!swapped) // если отсортирован
			break;
		swapped = false;
		for (let i = end - 1; i > start; i--) { // самый маленький влево
			if (arr[i - 1] > arr[i]) {
				swapNumbers(arr, i, i-1);
				swapped = true;
			}
		}
		start++;
	}
	return arr;
}
console.log(shakerSort([9,4,7,8,5,2,9]));
console.log(shakerSort([]));
