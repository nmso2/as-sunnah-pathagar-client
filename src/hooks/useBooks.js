import { useEffect, useState } from "react";


const useBooks = (id) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data));
        // eslint-disable-next-line
    }, []);

    return [books, setBooks]
};

export default useBooks;