
import Login from './views/login';
import Home from './views/home';



   const routes = [
        {
            path: '/home' ,
            name: 'home',
            component: Home
      },
        {
            path: '*' ,
            name: 'login',
            component: Login
      },
       
    ];

    export default routes;
