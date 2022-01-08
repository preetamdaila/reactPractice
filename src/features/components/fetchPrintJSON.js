import React from "react";
import useFetch from "../customHooks/useFetch";

function FetchPrintJSON() {
    const [data, pending] = useFetch(
        "https://api.github.com/users/preetamdaila"
    );
    console.log(data, pending);

    return (
        <pre style={{ textAlign: "left" }}>
            {pending ? "pending..." : JSON.stringify(data, null, 4)}
        </pre>
    );
}

export default FetchPrintJSON;
