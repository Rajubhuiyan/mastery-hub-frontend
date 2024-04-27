import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import 'swiper/css'; // swiper js bundle import
import 'swiper/css/pagination'; // swiper pagination style import
import "swiper/css/free-mode";
import { initializeApp } from 'firebase/app';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import SuspenseLoading from './SharedComponent/SuspenseLoader/SuspenseLoading';

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





 

  return (
    <Suspense
      fallback={<SuspenseLoading/>}
    >
      <RouterProvider router={router}>

      </RouterProvider>
    </Suspense>
  );
}

export default App;
