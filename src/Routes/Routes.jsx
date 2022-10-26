import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home>, loader: () => fetch('http://localhost:5000/courses') },
            { path: '/courses', element: <Courses></Courses>, loader: () => fetch('http://localhost:5000/courses') },
            { path: '/course/:id', element: <CourseDetails></CourseDetails>, loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`) }
        ]
    }
])

export default router;