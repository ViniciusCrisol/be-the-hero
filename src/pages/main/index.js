import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles.scss";
import "./styles.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div class="diagonal-hero-bg">
          <div class="stars">
            <div class="small"></div>
            <div class="medium"></div>
            <div class="big"></div>
          </div>
        </div>
        <header>
          <div className="links">
            <Link className="active" to="/">
              Sobre
            </Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/">Contato</Link>
          </div>
        </header>
        <div className="txtName">
          <h1>Vinícius Poloni Crisol</h1>
          <h3>Programador Full Stack</h3>
        </div>
        <div className="infoBox">
          <h2>Sobre:</h2>
          <p>
            Desenvolvedor Francano, amante de javaScript. Tenho disversos
            projetos em meu portifólio, para dar uma olhada acesse "Projetos" no
            menu superior ou clique no link abaixo para ser redicionado.
          </p>
          <br />
          <Link to="/projects">PROJETOS</Link>
        </div>
      </div>
    );
  }
}
