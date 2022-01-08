import React from "react";

export const FeaturesList = [
    {
        name: "Fetch & Print JSON",
        urlPath: "fetchPrintJson",
        modulePath: React.lazy(() =>
            import("../features/components/fetchPrintJSON")
        ),
    },
    {
        name: "To-Do",
        urlPath: "todo",
        modulePath: React.lazy(() =>
            import("../features/components/todo/createToDo")
        ),
    },
    {
        name: "Basic Redux",
        urlPath: "basicRedux",
        modulePath: React.lazy(() =>
            import("../features/components/basic-redux/basicRedux")
        ),
    },
];
