export function heapSort(array) {
    const auxillaryArray = array.slice()
    const animations = []
    heapSortHelper(array,animations)
    return animations
}

function heapSortHelper(array,animations){
    let n = array.length
    for (let i=n;i>=0;i--){
        heapify(array,n,i,animations)
    }

    for (let i=n-1;i>=0;i--){
        animations.push(["swap",0,array[i],i,array[0]])
        let temp = array[i]
        array[i] = array[0]
        array[0] = temp
        
        heapify(array,i,0,animations)
    }
}

function heapify(array,n,i,animations){
    let largest = i
    let left = 2*i+1
    let right = 2*i+2

    if (left<n && array[left]>array[largest]){
        animations.push(["compare1",left,largest])
        animations.push(["compare2",left,largest])
        largest = left
        
    }

    if (right<n && array[right]>array[largest]){
        animations.push(["compare1",right,largest])
        animations.push(["compare2",right,largest])
        largest = right
        
    }

    if (largest!==i){
        animations.push(["swap",largest,array[i],i,array[largest]])
        let temp = array[largest]
        array[largest] = array[i]
        array[i] = temp
        
        heapify(array,n,largest,animations)
    }

}