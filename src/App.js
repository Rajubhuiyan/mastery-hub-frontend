import './App.css';
import { RouterProvider } from 'react-router-dom'; 
import router from './Routes/Router';
import 'swiper/css'; // swiper js bundle import
import 'swiper/css/pagination'; // swiper pagination style import
import "swiper/css/free-mode";


function App() {
  return (
     <RouterProvider router={router}>

     </RouterProvider>
  );
}

export default App;
