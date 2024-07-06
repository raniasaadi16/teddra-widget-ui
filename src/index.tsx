import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import 'antd/dist/antd.css';

import './styles/global.css'
import WidgetLayout from './pages/widget/Layout';
import { AppContextProvider } from './context/appContext';
import ResourcesLayout from './pages/widget/resources';
import AllPublicationsLayout from './pages/widget/resources/allPublications';
import AllVolumsLayout from './pages/widget/resources/allVolums';
import PublicationDetails from './components/shared/details/Publications';
import ResourcesContainerLayout from './pages/widget/resources/Layout';
import NetworkContainerLayout from './pages/widget/networkResources/Layout';
import GridContainerLayout from './pages/widget/grid/Layout';
import GridLayout from './pages/widget/grid';
import NetworkResourcesForVolumes from './pages/widget/networkResources/ForVolumes';
import NetworkResourcesForServers from './pages/widget/networkResources/ForServers';
import PrivateRoute from './components/shared/PrivateRoute';
import Login from './pages/connect';
import Partner from './pages/widget/partner';
import VolumeDetails from './components/shared/details/volume'; 
import FolderPublications from './pages/widget/resources/folderPublications';
import { GridContextProvider } from './pages/widget/grid/context/gridContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<PrivateRoute/>}>
      <Route element={<AppContextProvider><Layout/></AppContextProvider>}>
        <Route path='/' element={<></>}/>
        <Route path='/widget/partner/:coll/:id' element={<Partner/>}/>


          {/**    GRID RESOURCES (SECOND TAB) */}
          <Route element={<GridContextProvider><GridContainerLayout/></GridContextProvider>}>
            <Route element={<GridLayout/>}>
              <Route path='/widget/grid' element={<></>}/>
            </Route>
            <Route element={<NetworkResourcesForServers/>}>
              <Route path='/widget/grid/:datacenterId' element={<></>}/>
                <Route path='/widget/grid/:datacenterId/volumes/:volumeId' element={<VolumeDetails/>}/>

            </Route>

          </Route>
        <Route element={<WidgetLayout/>}>                                 
          <Route path='/widget' element={<></>}/>



          {/**    NETWORK RESOURCES (SECOND TAB) */}
          <Route element={<NetworkContainerLayout/>}>
            {/** ONLY SERVERS */}
            <Route element={<NetworkResourcesForServers/>}>
              <Route path='/widget/network/:datacenterId/:serverId' element={<></>}/>
              {/**VOLUME DETAILS */}
                <Route path='/widget/network/:datacenterId/:serverId/volumes/:volumeId' element={<VolumeDetails/>}/>
                

            </Route>

            {/** ONLY VOLUMES */}
            <Route element={<NetworkResourcesForVolumes/>}>
              <Route path='/widget/network/:datacenterId/:serverId/:type/:volume' element={<></>}/>
              {/**VOLUME DETAILS */}
                 <Route path='/widget/network/:datacenterId/:serverId/:type/:volume/volumes/:volumeId' element={<VolumeDetails/>}/>
            </Route>

          </Route>


          {/**    RESOURCES (FIRST TAB) */}
          <Route element={<ResourcesContainerLayout/>}>
            <Route element={<ResourcesLayout/>}>
              <Route path='/widget/main/:datacenterId/:serverId' element={<></>}/>
              <Route path='/widget/main/:datacenterId/:serverId/:type/:volume' element={<></>}/>
              {/**PUBLICATIONS DETAILS IN THE FIRST PAGE */}
                <Route path='/widget/main/:datacenterId/:serverId/publications/:publicationId' element={<PublicationDetails/>}/>
                <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/publications/:publicationId' element={<PublicationDetails/>}/>
                
              {/**VOLUME DETAILS IN THE FIRST PAGE */}
                <Route path='/widget/main/:datacenterId/:serverId/volumes/:volumeId' element={<VolumeDetails/>}/>
                <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/volumes/:volumeId' element={<VolumeDetails/>}/>
           
            </Route>
           
            <Route element={<FolderPublications/>}>
              <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/volumes/:volumeId/publications' element={<></>}/>
                <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/volumes/:volumeId/publications/:publicationId' element={<PublicationDetails/>}/>

            </Route>


            <Route element={<AllPublicationsLayout/>}>
              <Route path='/widget/main/:datacenterId/:serverId/all/publications' element={<></>}/>
              <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/all/publications' element={<></>}/>
              {/**PUBLICATIONS DETAILS IN THE ALL PUBLICATIONS PAGE */}
                <Route path='/widget/main/:datacenterId/:serverId/all/publications/:publicationId' element={<PublicationDetails/>}/>
                <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/all/publications/:publicationId' element={<PublicationDetails/>}/>

            </Route>

            <Route element={<AllVolumsLayout/>}>
              <Route path='/widget/main/:datacenterId/:serverId/all/volumes' element={<></>}/>
              <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/all/volumes' element={<></>}/>
              {/**VOLUME DETAILS IN THE ALL VOLUMES PAGE */}
                <Route path='/widget/main/:datacenterId/:serverId/all/volumes/:volumeId' element={<VolumeDetails/>}/>
                <Route path='/widget/main/:datacenterId/:serverId/:type/:volume/all/volumes/:volumeId' element={<VolumeDetails/>}/>
              

            </Route>
           

          </Route>

        </Route>
      </Route>

    </Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/unauthorized' element={<p>Unauthorized</p>}/>

    
    </>

  )
);
root.render(
  <RouterProvider router={router} />
);
