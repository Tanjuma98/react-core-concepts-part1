/* eslint-disable react/prop-types */
import './Book.css';
export default function Book({book}){
    const {name, price} = book;
    return (
        <div className='book'>
            <h3>Book name: {name}</h3>
            <h3>Price of book: {price}</h3>
        </div>
    )
}