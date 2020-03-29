import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./styles.css";

export default class Projects extends Component {
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
            <Link to="/">Sobre</Link>
            <Link className="active" to="/projects">
              Projetos
            </Link>
            <Link to="/">Contato</Link>
          </div>
        </header>
        <p className="txtTopGit">
          Todos os projetos possuem um link ao seu respectivo repositório no
          GitHub
        </p>
        <div className="containerCards">
          <Link to="/Bethehero">
            <div className="card">
              <div className="imgCard bg1"></div>
              <div className="cardFooter">
                <h1>Be The Hero</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#17B7E8" />
                  <FaNodeJs size={28} color="#689F63" />
                </div>
                <p>Projeto desenvolvido durante a semana OmniStack 11</p>
              </div>
            </div>
          </Link>
          <Link to="/Airbnb">
            <div className="card">
              <div className="imgCard bg2"></div>
              <div className="cardFooter">
                <h1>Airbnb</h1>
                <div className="cardIcons">
                  <AiOutlineHtml5 size={28} color="#FFB843" />
                </div>
                <p>Clone página inicial do Airbnb</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
