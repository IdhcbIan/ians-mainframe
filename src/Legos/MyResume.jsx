import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LangButton from './LangButton';
import BackButton from './BackButton';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0a0a0a;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
  }
`;

const ResumeContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1a1a1a;
  color: #e0e0e0;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #61dafb;
  border-bottom: 2px solid #61dafb;
  padding-bottom: 5px;
`;

const DownloadButton = styled.a`
  background-color: #222;
  color: #e0e0e0;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  margin-right: 10px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const EmailLink = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  text-decoration: none;
  color: #e0e0e0;
  background-color: #222;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  
  &:hover {
    background-color: #333;
  }
`;

const Profile = styled.div`
  column-count: 2;
  column-gap: 20px;
  text-align: justify;
  margin-bottom: 20px;
`;

const MyResume = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const content = {
    en: {
      name: "Ian De Holanda Cavalcanti Bezerra",
      title: "Applied Mathematics and Computer Science Student",
      email: "idhcb.ian@usp.br",
      profile: `I'm an Applied Math and Computer Science Student at ICMC USP. I am truly passionate about working on hard problems and building the future. In university, I developed a keen interest in AI and computer science. Mainly, the use of smarter systems to push the frontier of human knowledge greatly interests me! I'm a firm believer in efficiency and simplicity; fast execution and iterative improvements can achieve great things. 

Since childhood, I've been fascinated by science and technology. In middle school, I created the Pong game using Scratch, and in high school, I delved deeper into computers and systems, learning Python and Linux. Recognizing the fundamental importance of mathematics in understanding reality and intelligent systems, I chose to pursue Applied Mathematics and Computer Science at the University of São Paulo.

At university, I've expanded my knowledge of data structures, algorithms, and lower-level programming systems like C and Assembly. My side projects explore artificial intelligence and modern Neural Network architectures. Recently, I've become interested in the commercial aspects of programming, learning web technologies like HTML/CSS/JavaScript and frameworks such as Node.js and React to turn intelligent systems and algorithms into products.`,
      education: {
        title: "Education",
        highSchool: {
          name: "Colégio Bandeirantes",
          location: "São Paulo",
          period: "Graduated: 2021"
        },
        university: {
          degree: "Bachelor's in Applied Mathematics and Computer Science",
          name: "University of São Paulo (USP), São Carlos",
          period: "Expected Graduation: 2026"
        }
      },
      skills: {
        title: "Skills",
        list: [
          "Programming Languages (Proficient): Python, C",
          "Programming Languages (Basic): Assembly, Rust",
          "Web Development: HTML, CSS, JavaScript, React, Node.js",
          "Data Analysis: MATLAB",
          "Python Libraries: PyTorch, Numpy, Matplotlib",
          "Version Control: Git"
        ]
      },
      projects: {
        title: "Projects and Experiences",
        list: [
          "Is Part of the coding extension group CodeLab",
          "Machine learning model for molecule classification"
        ]
      },
      languages: {
        title: "Languages",
        list: [
          "Portuguese (Native)",
          "English (Fluent)"
        ]
      },
      downloadButtonEn: "Download English Resume",
      downloadButtonPt: "Download Portuguese Resume",
      emailMe: "Email Me"
    },
    pt: {
      name: "Ian De Holanda Cavalcanti Bezerra",
      title: "Estudante de Matemática Aplicada e Computacional",
      email: "idhcb.ian@usp.br",
      profile: `Sou um estudante de Matemática Aplicada e Ciência da Computação no ICMC USP, apaixonado por resolver problemas difíceis e construir o futuro. Na universidade desenvolvi grande interesse em IA e computação o que me levou a explorar o uso de sistemas mais inteligentes na expansão do conhecimento e das conquistas humanas. Acredito na eficiência e simplicidade, valorizando a execução rápida e melhorias iterativas para alcançar grandes feitos.

Desde a infância, sou fascinado por ciência e tecnologia. Já no ensino fundamental, participei de um grupo de extensão onde criamos o jogo Pong usando Scratch, no ensino médio, me aprofundei em computadores e sistemas, aprendendo Python e Linux. Reconhecendo a importância fundamental da matemática na compreensão da realidade e dos sistemas inteligentes, escolhi cursar Matemática Aplicada e Ciência da Computação na Universidade de São Paulo.

Na universidade, expandi meu conhecimento em estruturas de dados, algoritmos e sistemas de programação de baixo nível como C e Assembly. Meus projetos paralelos exploram inteligência artificial e arquiteturas modernas de Redes Neurais. Recentemente, me interessei pelos aspectos comerciais da programação, aprendendo tecnologias web como HTML/CSS/JavaScript e frameworks como Node.js e React para transformar sistemas inteligentes e algoritmos em produtos.`,
      education: {
        title: "Educação",
        highSchool: {
          name: "Colégio Bandeirantes",
          location: "São Paulo",
          period: "Concluído: 2021"
        },
        university: {
          degree: "Bacharelado em Matemática Aplicada e Ciência da Computação",
          name: "Universidade de São Paulo (USP), São Carlos",
          period: "Previsão de Conclusão: 2026"
        }
      },
      skills: {
        title: "Habilidades",
        list: [
          "Linguagens de Programação (Proficiente): Python, C",
          "Linguagens de Programação (Básico): Assembly, Rust",
          "Desenvolvimento Web: HTML, CSS, JavaScript, React, Node.js",
          "Análise de Dados: MATLAB",
          "Bibliotecas Python: PyTorch, Numpy, Matplotlib",
          "Controle de Versão: Git"
        ]
      },
      projects: {
        title: "Projetos e Experiências",
        list: [
          "Faz parte do grupo de extensão de programação CodeLab",
          "Modelo de aprendizado de máquina para classificação de moléculas"
        ]
      },
      languages: {
        title: "Idiomas",
        list: [
          "Português (Nativo)",
          "Inglês (Fluente)"
        ]
      },
      downloadButtonEn: "Baixar Currículo em Inglês",
      downloadButtonPt: "Baixar Currículo em Português",
      emailMe: "Me Envie um Email"
    }
  };

  return (
    <>
      <GlobalStyle />
      <ResumeContainer>
        <BackButton to="/" />
        <LangButton onLanguageChange={handleLanguageChange} />
        <h1>{content[language].name}</h1>
        <p>{content[language].title}</p>
        <p><a href={`mailto:${content[language].email}`}>{content[language].email}</a></p>

        <Section>
          <SectionTitle>Profile</SectionTitle>
          <Profile>{content[language].profile}</Profile>
        </Section>

        <Section>
          <SectionTitle>{content[language].education.title}</SectionTitle>
          <p><strong>{content[language].education.highSchool.name}</strong> - {content[language].education.highSchool.location}</p>
          <p>{content[language].education.highSchool.period}</p>
          <p><strong>{content[language].education.university.degree}</strong></p>
          <p>{content[language].education.university.name}</p>
          <p>{content[language].education.university.period}</p>
        </Section>

        <Section>
          <SectionTitle>{content[language].skills.title}</SectionTitle>
          <ul>
            {content[language].skills.list.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>{content[language].projects.title}</SectionTitle>
          <ul>
            {content[language].projects.list.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <SectionTitle>{content[language].languages.title}</SectionTitle>
          <ul>
            {content[language].languages.list.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </Section>

        <DownloadButton href="https://drive.google.com/file/d/11kT0AyHCInDmXY5IRMrj_8N2fQzBdPUd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          {content[language].downloadButtonEn}
        </DownloadButton>
        <DownloadButton href="https://drive.google.com/file/d/1XjaC8zqjnALiPMeK8jvm5lQaw6Pj8MKx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          {content[language].downloadButtonPt}
        </DownloadButton>
      </ResumeContainer>
      <EmailLink href="mailto:idhcb.ian@usp.br">{content[language].emailMe}</EmailLink>
    </>
  );
};

export default MyResume;
