function insertionSort(arr) {

    const sortedArr = []

    if(arr.length){
        sortedArr.push(arr[0])
    }

    for (let i = 1; i < arr.length; i++){

        for(let j = sortedArr.length - 1; j >= 0; j-- ){

            if(arr[i] > sortedArr[j]){

                sortedArr.splice(j+1, 0, arr[i])
                break

            } else if (j === 0){

                sortedArr.unshift(arr[i])

            }

        }

    }

    return sortedArr

}

module.exports = insertionSort;