import React, { useState } from 'react'
import './App.css'
import LangButton from './Legos/LangButton'
import headerImage from './assets/main2.jpg'
import twitterLogo from './assets/twitter.png'
import githubLogo from './assets/github.png'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
  }
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #fff;
`

const Header = styled.header`
  border-bottom: 1px solid #fff;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  font-size: 1rem;
`

const Section = styled.section`
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const ExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const LanguageButton = styled(LangButton)`
  margin-bottom: 1rem;
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
      aboutText: "Hello! I'm an Applied Math and Computer Science Student at ICMC USP, I am really passionate about working on hard problems and building the future. In university I took an interest in AI and computer science. Mainly, the use of smarter systems to push the frontier of human knowledge and achievements greatly interest me! I'm a deep believer in efficiency and simplicity, fast execution and iterative improvements will take us to the stars. Get to know my projects and ideas on this page!",
      resumeLink: "View My Resume",
      projectsTitle: "Projects",
      projects: [
        { name: "AI Used for Molecule Classification", route: "/project1" },
        { name: "Mapping the lazyest way to walk campus", route: "/project2" },
        { name: "Read My book!!", route: "/project3" }
      ],
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
      aboutText: "Olá! Sou um estudante de Matemática Aplicada e Ciência da Computação no ICMC USP, sou realmente apaixonado por trabalhar em problemas difíceis e construir o futuro. Na universidade, me interessei por IA e ciência da computação. Principalmente, o uso de sistemas mais inteligentes para expandir a fronteira do conhecimento e das realizações humanas me interessou muito! Sou um profundo crente na eficiência e simplicidade, execução rápida e melhorias iterativas nos levarão às estrelas. Conheça meus projetos e ideias nesta página!",
      resumeLink: "Ver Meu Currículo",
      projectsTitle: "Projetos",
      projects: [
        { name: "IA Usada para Classificação de Moléculas", route: "/project1" },
        { name: "Mapeando o caminho mais preguiçoso para andar no campus", route: "/project2" },
        { name: "Leia Meu livro!!", route: "/project3" }
      ],
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
      <Container>
        <LanguageButton onLanguageChange={handleLanguageChange} />
        <Header>
          <Title>{content[language].welcome}</Title>
          <Subtitle>{content[language].tagline}</Subtitle>
        </Header>
        <Section>
          <SectionTitle>{content[language].projectsTitle}</SectionTitle>
          <List>
            {content[language].projects.map((project, index) => (
              <ListItem key={index}>
                <StyledLink to={project.route}>
                  {project.name}
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </Section>
        <Section>
          <SectionTitle>{content[language].aboutTitle}</SectionTitle>
          <p>{content[language].aboutText}</p>
          <List>
            <ListItem>
              <StyledLink to="/resume">{content[language].resumeLink}</StyledLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://link.chess.com/play/yuJnWe" target="_blank" rel="noopener noreferrer">
                {content[language].challengeMe} {content[language].chessLink}
              </ExternalLink>
            </ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>{content[language].socialLinks}</SectionTitle>
          <List>
            <ListItem>
              <ExternalLink href="https://x.com/IIdhcb" target="_blank" rel="noopener noreferrer">
                X.com
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://github.com/IdhcbIan" target="_blank" rel="noopener noreferrer">
                GitHub
              </ExternalLink>
            </ListItem>
          </List>
        </Section>
        <ExternalLink href="mailto:idhcb.ian@usp.br">{content[language].emailMe}</ExternalLink>
      </Container>
    </>
  )
}

export default App