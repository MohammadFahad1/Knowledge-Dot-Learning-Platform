import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home>, loader: () => fetch('http://localhost:5000/courses') },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/courses', element: <Courses></Courses>, loader: () => fetch('http://localhost:5000/courses') },
            { path: '/course/:id', element: <CourseDetails></CourseDetails>, loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`) },
            { path: '/checkout/:id', element: <CheckOut></CheckOut>, loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`) },
        ]
    }
])

export default router;