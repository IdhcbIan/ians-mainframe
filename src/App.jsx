import React, { useState } from 'react'
import './App.css'
import LangButton from './Legos/LangButton'
import headerImage from './assets/Back.jpg'
import twitterLogo from './assets/twitter.png'
import githubLogo from './assets/github.png'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import DoublePendulum from './cool/pendulum.jsx'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0a0a0a;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
  }
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  padding: 2rem;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const HeroContent = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 1rem 0;
  filter: brightness(0.8);

  @media (min-width: 768px) {
    max-width: 40%;
    margin: 1rem;
  }

  @media (min-width: 1200px) {
    max-width: 500px;
  }
`

const FloatingText = styled.div`
  position: relative;
  z-index: 1;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #0a0a0a;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Section = styled.section`
  flex: 1;
  padding: 1rem;
  background-color: #1a1a1a;
  border-radius: 8px;
`

const LanguageButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
`

const LanguageLabel = styled.span`
  margin-right: 0.5rem;
  color: #e0e0e0;
`

const ProjectsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 50px;
`

const ProjectsTitle = styled.h2`
  margin-bottom: 0.5rem;
  color: #f0f0f0;
`

const ProjectsList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  margin-top: 0.5rem;
  text-align: justify;
  width: 100%;
`

const ProjectItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #d0d0d0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }

  &::after {
    content: '→';
    margin-left: 10px;
  }
`

const BlogLink = styled(Link)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #e0e0e0;
  padding: 10px 20px;
  background-color: #222;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`

const JustifiedText = styled.p`
  text-align: justify;
  color: #d0d0d0;
`

const SocialLinksList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 1rem;
`

const SocialLinkItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const SocialLink = styled.a`
  text-decoration: none;
  color: #d0d0d0;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  filter: brightness(0.8);
`

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
`

// New styled component for the about section links
const AboutLink = styled(Link)`
  text-decoration: none;
  color: #d0d0d0;
  display: inline-block;
  width: 100%;
  padding: 5px 0;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pt' : 'en');
  };

  const content = {
    en: {
      welcome: "Hello! Im Ian, Welcome to my personal website!",
      tagline: "Get to know my projects and ideas on this page!",
      aboutTitle: "About Me",
      aboutText: "Hello! I'm an Applied Math and Computer Science Student at ICMC USP, I am really passionate about working on hard problems and building the future. In university I took an interest in AI and computer science. Mainly, the use of smarter systems to push the frontier of human knowledge and achievements greatly interests me! I'm a deep believer in efficiency and simplicity, fast execution and iterative improvements will take us to the stars. Get to know my projects and ideas on this page!",
      resumeLink: "View My Resume",
      projectsTitle: "Projects",
      projects: [
        { name: "Neural Networks used in cristalography molecule classification", route: "/project1" },
        { name: "Neural Networks for IR Spectroscopy", route: "/project2" }
      ],
      blogLink: "Read My Blog",
      socialLinks: "Find me on X.com and GitHub:",
      changeLanguage: "Change Language",
      challengeMe: "Challenge me on",
      chessLink: "chess.com",
      emailMe: "Email Me"
    },
    pt: {
      welcome: "Olá! Eu sou Ian, Bem-vindo ao meu site pessoal!",
      tagline: "Conheça meus projetos e ideias nesta página!",
      aboutTitle: "Sobre Mim",
      aboutText: "Olá! Sou um estudante de Matemática Aplicada e Ciência da Computação no ICMC USP, tenho como foco resolver problemas complexos e construir o futuro. Na universidade, me aprofundei em IA e ciência da computação. Principalmente, o uso de sistemas inteligentes para expandir a fronteira do conhecimento e das realizações humanas me fascina! Acredito profundamente na eficiência e simplicidade - execução rápida e melhorias iterativas nos levarão às estrelas. Conheça meus projetos e ideias nesta página!",
      resumeLink: "Ver Meu Currículo",
      projectsTitle: "Projetos",
      projects: [
        { name: "Redes Neurais usadas na classificação de moléculas em cristalografia", route: "/project1" },
        { name: "Redes Neurais para Espectroscopia IR", route: "/project2" }
      ],
      blogLink: "Leia Meu Blog",
      socialLinks: "Me encontre no X.com e GitHub:",
      changeLanguage: "Mudar Idioma",
      challengeMe: "Me desafie:",
      chessLink: "chess.com",
      emailMe: "Me Envie um Email"
    }
  };

  return (
    <>
      <GlobalStyle />
      <HeroContainer>
        <LanguageButtonContainer>
          <LanguageLabel>{content[language].changeLanguage}:</LanguageLabel>
          <LangButton onLanguageChange={handleLanguageChange} />
        </LanguageButtonContainer>
        <HeroContent>
          <FloatingText>
            <h1>{content[language].welcome}</h1>
            <p>{content[language].tagline}</p>
          </FloatingText>
        </HeroContent>
        <HeroImage src={headerImage} alt="Header" />
      </HeroContainer>
      <ContentContainer>
        <ProjectsSection className="projects">
          <ProjectsTitle>{content[language].projectsTitle}</ProjectsTitle>
          <ProjectsList>
            {content[language].projects.map((project, index) => (
              <ProjectItem key={index}>
                <ProjectLink to={project.route}>
                  {project.name}
                </ProjectLink>
              </ProjectItem>
            ))}
          </ProjectsList>
          <BlogLink to="/blog">
            {content[language].blogLink}
          </BlogLink>
        </ProjectsSection>
        <Section className="introduction">
          <h2>{content[language].aboutTitle}</h2>
          <JustifiedText>{content[language].aboutText}</JustifiedText>
          <ProjectsList>
            <ProjectItem>
              <AboutLink to="/resume">{content[language].resumeLink}</AboutLink>
            </ProjectItem>
            <ProjectItem>
              <AboutLink as="a" href="https://www.chess.com/member/ian_dhcb" target="_blank" rel="noopener noreferrer">
                {content[language].challengeMe} {content[language].chessLink}
              </AboutLink>
            </ProjectItem>
          </ProjectsList>
          <h3>{content[language].socialLinks}</h3>
          <SocialLinksList>
            <SocialLinkItem>
              <SocialLink href="https://x.com/IIdhcb" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={twitterLogo} alt="X.com" />
                X.com
              </SocialLink>
            </SocialLinkItem>
            <SocialLinkItem>
              <SocialLink href="https://github.com/IdhcbIan" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={githubLogo} alt="GitHub" />
                GitHub
              </SocialLink>
            </SocialLinkItem>
          </SocialLinksList>
        </Section>
      </ContentContainer>
      <EmailLink href="mailto:idhcb.ian@usp.br">{content[language].emailMe}</EmailLink>
      <DoublePendulum />
    </>
  )
}

export default App
