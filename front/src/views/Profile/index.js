import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import auth from '../../services/auth';

function App() {

  async function getUser(){
    const {userId, token} = auth.getUserAuth();
    const response = await api.get('/users/' + userId, {headers: {authorization: token}})
  }

  useEffect(() =>{
    getUser();
  })

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center mb-3">Profile</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
