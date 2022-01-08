import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState({});
    const [pending, setPending] = useState(true);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((jsonResponse) => {
                setData(jsonResponse);
                setPending(false);
            })
            .catch((e) => {
                setData(JSON.parse(e));
                setPending(false);
            });
    }, [url]);

    return [data, pending];
}

export default useFetch;
