import { useEffect, useState } from "react";
import { API_URL } from "../constants/api";

export const useShows = () => {
    const [data, setData] = useState([]);
    const [headerData, setHeaderData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        setLoading(true);

        try {
            const res = await fetch(API_URL);

            if (!res.ok) {
                throw {
                    msg: "Falló el consumo de la api",
                    code: res.status,
                };
            }

            const db = await res.json();

            setData(db);

            // get Random
            const n = Math.floor(Math.random() * db.results.length);
            const random = db.results[n];
            setHeaderData(random);
            
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
