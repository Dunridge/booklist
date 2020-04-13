import React, { createContext, useState } from 'react';
import uuid from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'the name of the wind', id: 1 },
        { title: 'the final empire', id: 2 },
    ]);

    const addBook = (title, author) => {
        setBooks([books, {title, author, id: uuid() }]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{book, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )

};

export default BookContextProvider;