import React from 'react';
import Home from './components/Home';
import Course from './components/Course';
import NotFound from './components/NotFound';
import CourseListPage from './pages/CourseListPage/CourseListPage';

import CourseDetailPage from './pages/CourseDetailPage/CourseDetailPage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/course',
        exact: false,
        main: ({match}) => <CourseListPage match={match} />
    },
    {
        path: '/chitiet/:id',   
        exact: false,
        main: ({match}) => <CourseDetailPage match={match} />
    },
   
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }

]
export default routes;