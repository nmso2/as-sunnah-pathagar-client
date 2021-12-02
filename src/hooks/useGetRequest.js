import { useEffect, useState } from "react";


const useGetRequest = (requestedItem) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://as-sunnah-pathagar.herokuapp.com/${requestedItem}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setIsLoading(false);
            });
    }, [requestedItem]);

    return { items, setItems, isLoading }
};

export default useGetRequest;