/* eslint-disable react/jsx-key */
import Singer from './Singer';
import Actor from './Actor'
import BookStore from './BookStore';
import './App.css'
// import Todo from './Todo'

function App() {
  const actors = ['aa', 'bb', 'cc', 'dd'];
  const singers = [
    {name: 'adele', age: 50},
    {name: 'zayn', age: 36},
    {name: 'justin', age: 33}
  ]
  const books = [
    {id:1, name: 'physics', price: 300},
    {id:2, name: 'chemistry', price: 200},
    {id:3, name: 'Math', price: 100},
  ]
  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>
      {
      actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* {
        singers.map(singer => <Singer name={singer.name} age={singer.age}></Singer>)
      } */}
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Person name="jack"></Person>
      <Student></Student>
      <Device name="mobile" price={1000}></Device>
      <Device name="laptop" price={2000}></Device>
      <Device name="tablet"></Device> */}
    </>
  )
}
// function Device({ name, price = 0 }) {
//   return (
//     <div>
//       <h2>This device: {name}</h2>
//       <h3>Price: {price}</h3>
//     </div>
//   )
// }
// function Person(props) {
//   console.log(props)
//   const p = { id: 22, age: 44 };
//   return (
//     <h2 style={{ border: '2px solid blue', borderRadius: '10px', padding: '20px' }}>A person: {props.name} and age is {p.age}</h2>
//   )
// }
// function Student() {
//   const elemStyle = {
//     fontSize: '20px',
//   }
//   return (
//     <div className='student'>
//       <p style={elemStyle}>Name:</p>
//       <p style={elemStyle}>Age:</p>
//     </div>
//   )
// }
export default App
