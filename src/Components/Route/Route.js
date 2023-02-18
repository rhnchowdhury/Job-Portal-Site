import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/Jobs/Experienced/JobDetails";
import FresherJobDetails from "../Pages/Jobs/Fresher/FresherJobDetails";
import Login from "../Pages/Login/Login";

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
            },
            {
                path: '/experience',
                element: <JobDetails></JobDetails>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    }
])