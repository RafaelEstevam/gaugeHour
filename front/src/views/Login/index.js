import React, { useEffect, useState } from 'react';
import {Redirect} from 'react-router-dom';
import api from '../../services/api';
import auth from '../../services/auth'

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    const data = {email, password}
    const response = await api.post('/auth', data);
    await auth.setUserAuth(response.data.user._id, response.data.token);
    setRedirect(true);
  }

  if(redirect){
    return (
      <Redirect to="/" />
    )
  }else{
    return (
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <input className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input className="form-control mb-3" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="btn btn-primary btn-block btn-lg">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
