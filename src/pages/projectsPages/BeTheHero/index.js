import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default class BeTheHero extends Component {
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
            <Link className="projItem" to="/">
              Sobre
            </Link>
            <Link className="projItem" to="/projects">
              Projetos
            </Link>
            <Link className="projItem" to="/">
              Contato
            </Link>
          </div>
        </header>

        <div className="containerHero">
          <div className="containerHeroTxt">
            <h1>Be The Hero</h1>
            <p>Acesse o repositório do projeto:</p>
            <a
              target="blank"
              href="https://github.com/ViniciusCrisol/BeTheHero"
            >
              https://github.com/ViniciusCrisol/BeTheHero
            </a>
          </div>
          <div className="descProj">
            <p>
              <strong>Descrição geral:</strong>
            </p>
            <p>
              O projeto foi desenvolvido durante a semana OmniStack 11. Para sua
              criação foram utilizados React, React-Native e NodeJs. A aplicação
              consiste em uma plataforma que cadastra ONG's e lista casos que
              precisam de ajuda, possibilitando que usuários entrem em contato
              para ajudar as causas.
            </p>
            <br />
            <p>
              <strong>Tecnologias e funcionalidades:</strong>
            </p>
            <p>
              O aplicativo mobile, desenvolvido com React-Native e ExpoCli
              possui diversas funcionalidades interessantes, destancando entre
              elas a paginação infinita na tela de casos e o Deep Linking para a
              abertura do WhatsApp e E-mail com uma mensagem personalizada de
              acordo com cada caso. O banco de dados foi construido em SqLite,
              já que fornece uma ótima estrutura para trabalhar com tabelas
              relacionadas, facilitando o trabalho na hora de contruir o
              beck-end.
            </p>
            <h2>
              Clique nas imagens para abri-las em outra guia e confir o
              resultado final do projeto
            </h2>
          </div>
          <div className="imagensBTH">
            <a target="blank" href="https://i.ibb.co/L5VmyzV/Tela-Inicial.png">
              <div className="imagensContainerHero b1"></div>
            </a>
            <a target="blank" href="https://i.ibb.co/9g5z0Cb/Cadastro.png">
              <div className="imagensContainerHero b2"></div>
            </a>
            <div className="imagensBTH alingn">
              <a
                target="blank"
                href="https://i.ibb.co/C5dch12/Cadastrar-Caso.png"
              >
                <div className="imagensContainerHero b3"></div>
              </a>
              <a
                target="blank"
                href="https://i.ibb.co/7VKLkKq/Caso-Cadastrado.png"
              >
                <div className="imagensContainerHero b4"></div>
              </a>
            </div>
            <div className="imagensBTH alingn cel">
              <a
                target="blank"
                href="https://i.ibb.co/Jm9TZkc/Screenshot-2020-03-26-21-10-34.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel  b5"></div>
              </a>
              <a
                target="blank"
                href="https://i.ibb.co/W5pyPmK/Screenshot-2020-03-26-21-10-48.png"
              >
                <div className="imagensContainerHero imagensContainerHeroCel b6"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
