import React from "react";
import { Link } from "react-router-dom";
import { FeaturesList } from "../constants/featuresList";

const Navbar = () => {
    return (
        <div
            style={{
                backgroundColor: "#ccc",
                padding: "0.5rem",
                display: "flex",
                flexFlow: "row wrap",
            }}
        >
            {FeaturesList.map((item, index) => {
                return (
                    <div>
                        <Link
                            className="App-link"
                            key={`App-link-${index}`}
                            to={"/" + item.urlPath}
                        >
                            {item.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Navbar;
