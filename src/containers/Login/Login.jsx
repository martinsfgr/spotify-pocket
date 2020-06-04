import React from 'react';
import './Login.scss';

import { Logo } from '../../components';

import { endpoints } from '../../modules/endpoints';

const Login = () => {
  return (
    <main className="login" data-testid="login">
      <div className="container">
        <Logo />

        <h2 className="login__microcopy">
          Não toca a música inteira, <strong>Mas toca o seu coração!</strong>
        </h2>

        <a href={endpoints.getAuthorization.url} className="login__auth-button">
          Entrar com o Spotify.
        </a>
      </div>
    </main>
  )
}

export default Login;
