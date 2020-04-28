export function quickSort(array) {
    const auxillaryArray = array.slice();
    const animations = []
    quickSortHelper(auxillaryArray,0,array.length-1,animations)
    return animations
}

function quickSortHelper(arr,start,stop,animations){
    if(start < stop){
        let pivotIndex = Randpartition(arr,start,stop,animations)
        quickSortHelper(arr,start,pivotIndex-1,animations)
        quickSortHelper(arr,pivotIndex+1,stop,animations)
    }
}

function Randpartition(arr, start, stop, animations) {
    let randPivot = Math.floor(Math.random()*(stop-start+1)+start)
    let temp = arr[randPivot]
    arr[randPivot] = arr[start]
    arr[start] = temp
    return partition(arr, start, stop, animations)
}

function partition(arr, start, stop, animations){
    let pivot = start 
    let i = start+1
    for(let j=start+1;j<=stop;j++){
        animations.push(["compare1",j,pivot])
        animations.push(["compare2",j,pivot])
        if(arr[j]<=arr[pivot]){
            animations.push(["swap",j,arr[i],i,arr[j]])
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
        }
    }
    animations.push(["compare1",i-1,pivot])
    animations.push(["compare2",i-1,pivot])
    animations.push(["swap",i-1,arr[pivot],pivot,arr[i-1]])
    let temp = arr[i-1]
    arr[i-1] = arr[pivot]
    arr[pivot] = temp
    pivot = i-1
    return pivot
}