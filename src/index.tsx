import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import 'antd/dist/antd.css';

import './styles/global.css'
import WidgetLayout from './pages/widget/Layout';
import { AppContextProvider } from './context/appContext';
import ResourcesLayout from './pages/widget/resources';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppContextProvider><Layout/></AppContextProvider>}>
      <Route path='/' element={<></>}/>

      <Route element={<WidgetLayout/>}>
        <Route path='/widget' element={<></>}/>
        <Route path='/widget/:datacenterId/:serverId' element={<ResourcesLayout/>}/>
        <Route path='/widget/:datacenterId/:serverId/:type/:volume' element={<ResourcesLayout/>}/>


      </Route>
    </Route>

  )
);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
