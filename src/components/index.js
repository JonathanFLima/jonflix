import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Menu.css';
import Button from './Buttons/index';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Aluraflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
