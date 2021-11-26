import { useEffect, useState } from "react";


const useBooks = (id) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://as-sunnah-pathagar.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setIsLoading(false);
            });
    }, []);

    return { books, setBooks, isLoading }
};

export default useBooks;