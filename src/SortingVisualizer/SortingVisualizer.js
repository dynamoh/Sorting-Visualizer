import React, { Component } from 'react'
import './SortingVisualizer.css'
import { Menu, Dropdown, Form, Radio } from 'semantic-ui-react'
import { mergeSort } from '../SortingAlgorithms/mergeSort';
import { bubbleSort } from '../SortingAlgorithms/BubbleSort';
import { heapSort } from '../SortingAlgorithms/heapSort';
import { quickSort } from '../SortingAlgorithms/quickSort';

export class SortingVisualizer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             array:[],
             arraySize:100,
             sortSpeed:10,
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    randomIntFromInterval = (min,max) => {
        return Math.floor(Math.random()*(max-min+1) + min)
    }

    resetArray() {
        const array = []
        for(var i=0;i<this.state.arraySize;i++){
            array.push(this.randomIntFromInterval(5,600))
        }
        console.log(array)
        this.setState({array})
    }

    mergeSort() {
        const ssp = this.state.sortSpeed;
        const animations = mergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ssp);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ssp);
            }
        } 
    }

    bubbleSort() {
        const ssp = this.state.sortSpeed;
        const animations = bubbleSort(this.state.array);
        for (let i =0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ssp);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight,barTwoIdx,oldHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barTwoStyle.height = `${oldHeight}px`;

                }, i * ssp);
            }
        }
    }

    QuickSort() { 
        const ssp = this.state.sortSpeed;
        const animations = quickSort(this.state.array);
        for(let i =0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            if(animations[i][0]==="compare1"){
                const barOneIdx = animations[i][1];
                const barTwoIdx = animations[i][2]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = 'red';
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ssp);
            }
            else if(animations[i][0]==="compare2"){
                const barOneIdx = animations[i][1];
                const barTwoIdx = animations[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = 'turquoise';
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ssp);
            } else {
                setTimeout(() => {
                const [nm,barOneIdx, newHeight,barTwoIdx,oldHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barTwoStyle.height = `${oldHeight}px`;

                }, i * ssp);
            }
        }
    }

    heapSort() {
        const ssp = this.state.sortSpeed;
        const animations = heapSort(this.state.array);
        for(let i =0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            if(animations[i][0]==="compare1"){
                const barOneIdx = animations[i][1];
                const barTwoIdx = animations[i][2]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = 'red';
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ssp);
            }
            else if(animations[i][0]==="compare2"){
                const barOneIdx = animations[i][1];
                const barTwoIdx = animations[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = 'turquoise';
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ssp);
            } else {
                setTimeout(() => {
                const [nm,barOneIdx, newHeight,barTwoIdx,oldHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barTwoStyle.height = `${oldHeight}px`;

                }, i * ssp);
            }
        }
    }

    changeColor() {
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0;i<arrayBars.length;i++){
            arrayBars[i].style.backgroundColor = 'lightgreen'
        }
    }

    changeSpeed(value){
        this.setState({sortSpeed:value})
    }


    ChangeSize = (e,{value}) => {
        console.log(value)
        this.setState((prevState) => ({
            arraySize:parseInt(value)
        }))
        const array = []
        for(var i=0;i<value;i++){
            array.push(this.randomIntFromInterval(5,600))
        }
        console.log(array)
        this.setState({array})
    }

    render() {
        const {array,arraySize} = this.state;
        const wd = 650/arraySize;
        console.log(array)
        return (
            <>
                <Menu fluid style={{display:"flex",
                                    marginBottom:"20px",
                                    color:"rgba(0,0,0,0.9)",
                                    fontWeight:"800px",
                                    fontSize:"1em"
                                }} >
                    <Menu.Item
                        name='Generate New Array'
                        onClick={() => this.resetArray()}
                        style={{margin:"7px 20px",cursor:"pointer"}}
                    />
                    
                    <Dropdown selection text='Select Algorithm' style={{margin:"14px 20px",cursor:"pointer"}}>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.heapSort()}   text='Heap Sort' />
                            <Dropdown.Item onClick={() => this.mergeSort()}  text='Merge Sort' />
                            <Dropdown.Item onClick={() => this.QuickSort()}  text='Quick Sort' />
                            <Dropdown.Item onClick={() => this.bubbleSort()} text='Bubble Sort' />
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown selection text='Sorting Speed' style={{margin:"14px 20px",cursor:"pointer"}}>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => this.changeSpeed(500)}   text='Very Slow' />
                            <Dropdown.Item onClick={() => this.changeSpeed(100)}   text='Slow' />
                            <Dropdown.Item onClick={() => this.changeSpeed(40)}  text='Normal' />
                            <Dropdown.Item onClick={() => this.changeSpeed(10)}  text='Fast' />
                            <Dropdown.Item onClick={() => this.changeSpeed(10)}  text='Very Fast' />
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form style={{display:"flex",margin:"20px 20px -15px 20px",padding:"0px 5px",cursor:"pointer"}}>
                        <Form.Field style={{margin:"0px 10px",fontWeight:"600",fontSize:"1.2em"}}>
                        Array Size
                        </Form.Field>
                        <Form.Field>
                        <Radio
                            label='Small'
                            name='radioGroup'
                            value="50"
                            checked={this.state.arraySize === 50}
                            onChange={this.ChangeSize}
                            style={{margin:"0px 10px"}}
                        />
                        </Form.Field>
                        <Form.Field>
                        <Radio
                            label='Medium'
                            name='radioGroup'
                            value='150'
                            checked={this.state.arraySize === 150}
                            onChange={this.ChangeSize}
                            style={{margin:"0px 10px"}}
                        />
                        </Form.Field>
                        <Form.Field>
                        <Radio
                            label='Large'
                            name='radioGroup'
                            value='280'
                            checked={this.state.arraySize === 280}
                            onChange={this.ChangeSize}
                            style={{margin:"0px 10px"}}
                        />
                        </Form.Field>
                    </Form>
                    
                </Menu>
                <div className="array-container">
                {   
                    array.map((value,idx) => (
                        <div 
                            className="array-bar" 
                            key={idx}
                            style={{height: `${value}px`,width: `${wd}px`}}
                        ></div>
                    ))
                }
                </div>
                
            </>
        )
    }
}

export default SortingVisualizer
