import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import 'swiper/css'; // swiper js bundle import
import 'swiper/css/pagination'; // swiper pagination style import
import "swiper/css/free-mode";
import { initializeApp } from 'firebase/app';
import { useSelector } from 'react-redux';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBzU8fzn2QKf5PgMErFbQ1h75mVLQnucDU",
    authDomain: "mastery-hub.firebaseapp.com",
    projectId: "mastery-hub",
    storageBucket: "mastery-hub.appspot.com",
    messagingSenderId: "505247571949",
    appId: "1:505247571949:web:d00650fdb11dcbf86451e4"
  };

  const app = initializeApp(firebaseConfig);



  const loggedUser = useSelector(state => state.loggedUser.loggedUserData)


  console.log(loggedUser,'loggedUser')

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
