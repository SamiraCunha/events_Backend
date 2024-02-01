import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import ViewEvents from './pages/Organizer/ViewEvents';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import User from './pages/User';
import AddEvents from './pages/Organizer/AddEvents';
import Participants from './pages/Participants/Participants';
import EventDetail from './pages/Participants/EventDetail';
import ViewEventsP from './pages/Participants/ViewEventsP';
import RegistEvents from './pages/Participants/RegistEvents';
import Organizer from './pages/Organizer/Organizer';
import Home from "./pages/Home";
import EditEvents from './pages/Organizer/EditEvents';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/organizer' exact element={<Organizer />}></Route>
        <Route path='/add-events' exact element={<AddEvents />}></Route>
        <Route path='/view-events' exact element={<ViewEvents />}></Route>
        <Route path='/edit-events' exact element={<EditEvents />}></Route>
        <Route path='/sign-in' exact element={<Signin />}></Route>
        <Route path='/sign-up' exact element={<SignUp />}></Route>
        <Route path='/user' exact element={<User />}></Route>
        <Route path='/participants' exact element={<Participants />}></Route>
        <Route path="/event-detail" exact element={<EventDetail/>}></Route>
        <Route path='/view-eventsp' exact element={<ViewEventsP />}></Route>
        <Route path='/registered-events' exact element={<RegistEvents />}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}
