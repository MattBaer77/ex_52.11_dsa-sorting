function insertionSort(arr) {

    const sortedArr = []

    for (let i=0; i < arr.length; i++){

        if(sortedArr.length === 0){

            sortedArr.push(arr[i]);

        } else {

            for(let j = sortedArr.length - 1; j >= 0; j-- ){

                if(arr[i] > sortedArr[j]){
    
                    sortedArr.splice(j+1, 0, arr[i])
                    break
    
                } else if (j === 0){

                    sortedArr.unshift(arr[i])

                }
    
            }

        }

    }

    return sortedArr

}

module.exports = insertionSort;