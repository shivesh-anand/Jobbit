import React from 'react';
import { BrowerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Landing, Register, Error, ProtectedRoute } from './pages/index';
import {
  AddJobs,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />}></Route>
          <Route path="add-job" element={<AddJobs />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route exact path="/landing" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
