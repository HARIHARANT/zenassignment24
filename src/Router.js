import React from 'react';
import App from './App';
import {
    BrowserRouter, Routes, Route, Link
  } from "react-router-dom";
import CreateUser from './CreateUser';
import Users from './Users';
import Profile from './Profile';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/users">Users</Link>&nbsp;
                <Link to="/create-user">Create User</Link>&nbsp;
                <Link to="/edit-user/:id">Edit User</Link>&nbsp;
                <Link to="/profile/:id">Profile</Link>&nbsp;
                <Link to="/edit-profile/:id">Edit Profile</Link>
                <br/><br/><br/>
                <Routes>
                    <Route path="" element={<App />}></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/create-user" element={<CreateUser />}></Route>
                    <Route path="/edit-user/:id" element={<CreateUser />}></Route>
                    <Route path="/profile/:id" element={<Profile />}></Route>
                    <Route path="/edit-profile/:id" element={<Profile />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}