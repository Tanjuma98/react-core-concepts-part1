/* eslint-disable react/prop-types */
export default function Todo({ task, isDone }) {

    // conditional rendering: 6 ways

    // if(isDone){
    //     return <li>Task: {task}</li>
    // }
    // else{
    //     return <li>Work on: {task}</li>
    // }

    // return (
    //     <li>{isDone?'Finished':'work on'}: {task}</li>
    // )

    // return (
    //     <li>{task} : {isDone && 'Done'}</li>
    // )

    // return (
    //     <li>{task} {isDone || ' : Do it'}</li>
    // )
    
    let listItem;
    if (isDone) {
        listItem = <li>Task: {task}</li>
    }
    else {
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}