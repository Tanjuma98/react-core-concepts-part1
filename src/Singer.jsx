/* eslint-disable react/prop-types */
// export default function Singer({name, age}){
//     return (
//         <div>
//             <h3>Name: {name}</h3>
//             <h3>Age: {age}</h3>
//         </div>
//     )
// }
export default function Singer({singer}){
    const {name, age} = singer;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
        </div>
    )
}