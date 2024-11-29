import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Images/P3_Back.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a1a;
    color: #e0e0e0;
    font-family: 'Georgia', serif;
    line-height: 1.2;
  }
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(34, 34, 34, 0.8);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
`

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 2rem;
`

const RightColumn = styled.div`
  flex: 2;
`

const IllustrationImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 15px;
  margin-bottom: 1.5rem;
`

const Header = styled.header`
  border-bottom: 2px solid #4a4a4a;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.3rem;
  color: #d4af37;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #a0a0a0;
  margin-top: 0.2rem;
`

const Content = styled.div`
  margin-top: 2rem;
  line-height: 1.6;
`

const Paragraph = styled.p`
  margin-bottom: 1rem;
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #b8860b;
  line-height: 1.1;
`

const StyledLink = styled(Link)`
  color: #87ceeb;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  line-height: 1.1;
  &:before {
    content: '✧';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #add8e6;
    text-shadow: 0 0 10px rgba(135, 206, 235, 0.5);
    &:before {
      opacity: 1;
      left: -15px;
    }
  }
`

function Post3() {
  const content = {
    title: "Can you still see the human?",
    subtitle: "Exploring the human flame and the magic of existence",
    backToHome: "Back to Blog"
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <LeftColumn>
          <IllustrationImage src={backgroundImage} alt="Blog Illustration" />
        </LeftColumn>
        <RightColumn>
          <StyledLink to="/blog" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            {content.backToHome}
          </StyledLink>
          <Header>
            <Title>{content.title}</Title>
            <Subtitle>{content.subtitle}</Subtitle>
          </Header>
          <Content>
            <SectionTitle>Flames</SectionTitle>
            
            <Paragraph>Clouded and obfuscated by concepts and ideas, lies a human flame. Under the ocean of nationalities, beliefs, classifications, systems of symbols and ideologies, lies a human flame. The flame of experience, the flame of life, the flame that warms ideas, ideas which if too far from the flame die in the cold, when you look into the eyes of another human, can you still see the flames?</Paragraph>
            
            <Paragraph>Like a bonfire, that gives life to the platonic world of the shadows, and meaning to the cold world of stone and atoms, will this light shine through? Can you still see the human? Can you still see the flames?</Paragraph>
            
            <Paragraph>Ideas are parasitic things, they live off of the warmth of human experience, the human flame, an idea left alone is in the dark, forgotten or undiscovered, ideas populate the human experience, they connect the human flame with the outside world. Ideas, like a prism, turn the raw light of truth into specific colors and shapes, reflecting the object of truth in its best attempt. The truth and the correct connections and shapes have always existed but the ideas, the interpretation can only shine when fed light.</Paragraph>
            
            <Paragraph>And there lies a human soul, most of our lives we look at the reflections of one's prisms and shadows of one's boxes and classifications for concepts, but rarely do we see the flame. Rarely do we get to watch the burning fire of experience.</Paragraph>
            
            <Paragraph>All absolute ideas, all transcendental ideologies, all commandments, laws and ways of life, are merely stealing heat from the flame, they are nothing alone, for there is no light for them to be seen. Every system of symbols disappears without any resistance if it is simply left alone, for there are no flames who warm it or remember it.</Paragraph>
            
            <Paragraph>Seeing ideas in this way is a very interesting thing, for now you see the human, the flame as more valuable than any idea or any belief. This does not make it so the object of truth dies as its left alone, for the laws of the universe and how it propagates will remain constant weather there is someone to see it or not, but, the symbols, the interpretations we make out of it, out of the object of truth, the reflections we draw, those require the light and the heat of a human flame.</Paragraph>
            
            <SectionTitle>You don't need to formalize magic</SectionTitle>
            
            <Paragraph>In this book, we try to formalize truth, good and evil, thoughts and beliefs, experiences and dreams, consciousness and soul, but though all this neurotic search for meaning, we forget to watch the magic unfold, we try to explain it and make a system out of everything, leaving no holes in our understanding. But here I tell you, leave some space for the mystic and the unexplainable, the magic and the beautiful, the true and the lovely, just for a moment, look around, and see how the world almost seems to suspend itself, when you allow it to just exist there.</Paragraph>
            
            <Paragraph>Suspend yourself, only for a moment from the search for truth, for meaning, and allow it to talk to you, experience, reality, heat, flames. For a second, stretch out the tips of your blazing experience, your inner flame, and watch it burn as the firewood runs out, as the colors of the light shine with the splendor of the human aesthetic.</Paragraph>
          </Content>
          <StyledLink to="/blog" style={{ marginTop: '1rem', display: 'inline-block' }}>
            {content.backToHome}
          </StyledLink>
        </RightColumn>
      </Container>
    </>
  )
}

export default Post3
