// Entry point for the build script in your package.json
import './app.css';
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reserve from './components/Reserve';
import Nav from './components/Nav';
import Lecture from './components/Lecture';
import MyReservations from './components/MyReservations';
import AddLecture from './components/AddLecture';
import DeletePage from './pages/DeletePage';
import Details from './components/Details';

const App = () => (
  <div className="container-column flex flex-row justify-between gap-5">
    <Nav />
    <Routes className="container-routes">
      <Route index element={<Lecture />} />
      <Route path="lectures" element={<Lecture />} />
      <Route path="reserve" element={<Reserve />} />
      <Route path="my-reservations" element={<MyReservations />} />
      <Route path="add_lecture" element={<AddLecture />} />
      <Route path="delete_lecture" element={<DeletePage />} />
      <Route path="lecture_details" element={<Details />} />
    </Routes>
  </div>
);

export default App;
