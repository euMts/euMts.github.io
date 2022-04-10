import React from 'react';
import '../styles/About.css';
// import profilePic from './images/me/test.png';

function About() {
    return (
      <section className='about' id='about' name='about-name'>
          <div className='about__container'>
              <div className='about__rectangle'>
                  <div className='about__left'>
                    {/* <img src={profilePic} /> */}
                  </div>
                  <div className='about__right'>
                    <h1>My work</h1>
                    <h2>
                    Me chamo Matheus e trabalho com soluções voltadas à tecnologia.
                    </h2>
                    <h3>
                    Comecei meus estudos na programação com 14 anos e atuo profissionalmente na área desde 2021. Tenho experiência com scrum, estruturas de rede, banco de dados, automação e desenvolvimento de software.
                    </h3>
                    <h3>
                    Além de escrever linhas de código minha paixão é aprimorar o dia-a-dia das pessoas por meio da tecnologia.
                    </h3>
                    <h3>
                    Sinta-se à vontade para entrar em contato comigo caso tenha interesse pelo meu trabalho.
                    </h3>
                  </div>
              </div>
          </div>
      </section>
    )
  }

export default About;
