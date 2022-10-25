import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <h1 className="text-3xl font-bold">This is Home Page</h1> },
        ]
    }
])

export default router;