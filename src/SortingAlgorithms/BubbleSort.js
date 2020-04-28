export function bubbleSort(array){
    const animations = [];
    const auxillaryArray = array.slice();
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            animations.push([j,j+1])
            animations.push([j,j+1])
            if (auxillaryArray[j] > auxillaryArray[j + 1]) {
                animations.push([j,auxillaryArray[j+1],j+1,auxillaryArray[j]])
                let tmp = auxillaryArray[j];
                auxillaryArray[j] = auxillaryArray[j + 1];
                auxillaryArray[j + 1] = tmp;
            }
            else{
                animations.push([j,auxillaryArray[j],j+1,auxillaryArray[j+1]])
            }
        }
    }
    return animations;
}