import { useEffect, useState } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    const [headerData , setHeaderData] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        setLoading(true);

        try {
            const res = await fetch(
                "https://api.themoviedb.org/3/trending/tv/week?api_key=1cf50e6248dc270629e802686245c2c8"
            );

            if (!res.ok) {
                throw {
                    msg: "Falló el consumo de la api",
                    code: res.status,
                };
            }

            const db = await res.json();

            
            setData(db);

            // get Random
            const n = Math.floor(Math.random() * db.results.length)
            const random = db.results[n]
            setHeaderData(random)
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { data, loading, error, headerData, setHeaderData };
};
