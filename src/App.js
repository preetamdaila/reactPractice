import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Navbar from "./elements/Navbar";
import { FeaturesList } from "./constants/featuresList";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar />

                <div className="App-container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div style={{ textAlign: "center" }}>
                                    Please select any feature.
                                </div>
                            }
                            key="route-home"
                        />
                        {FeaturesList.map((item, index) => {
                            let Feature = item.modulePath;
                            return (
                                <Route
                                    path={"/" + item.urlPath}
                                    element={
                                        <Suspense fallback={<div>Hmm...</div>}>
                                            <Feature />
                                        </Suspense>
                                    }
                                    key={"route-" + index}
                                />
                            );
                        })}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
