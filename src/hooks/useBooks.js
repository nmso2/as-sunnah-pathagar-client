import { useEffect, useState } from "react";


const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://as-sunnah-pathagar.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data.books);
                setCount(data.count);
                setIsLoading(false);
            });
    }, []);

    return { count, books, setBooks, isLoading }
};

export default useBooks;