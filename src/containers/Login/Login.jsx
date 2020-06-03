import React from 'react';

import './Login.scss';

import { Logo } from '../../components';

const Login = () => (
  <main className="login" data-testid="login">
    <div className="container">
      <Logo />

      <h2 className="login__microcopy">
        Não toca a música inteira, <strong>Mas toca o seu coração!</strong>
      </h2>

      <a href="" className="login__auth-button">
        Entrar com o Spotify.
      </a>
    </div>
  </main>
);

export default Login;
