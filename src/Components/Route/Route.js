import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import FresherJobDetails from "../Pages/Jobs/Fresher/FresherJobDetails";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/fresher',
                element: <FresherJobDetails></FresherJobDetails>
            }
        ]
    }
])