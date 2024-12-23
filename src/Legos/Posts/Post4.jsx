import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Images/P4_Back.jpg'

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

function Post4() {
  const content = {
    title: "The Way in All Things",
    subtitle: "Understanding the universal pattern of mastery and growth",
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
            <SectionTitle>Find The Pattern</SectionTitle>
            
            <Paragraph>Once you understand the way broadly, you can see it in all things. The solution you seek so much, the special answer, they all reside within every process. For every process there is a time and a purpose, but its storyline, its development, how it expands and grows, this, always obeys the same pattern.</Paragraph>
            
            <Paragraph>For all arts the artist must endure the same challenges, the same breakthroughs, the same insights, and in the end, the same achievement. Every process has its own name, time and place. Though for the artist to reach the light it must always flow through the same path.</Paragraph>
            
            <Paragraph>The path of the artist is always the path of adventure, of rebellion, of challenge. To reach mastery and reap the fruit of the intended seed, one must go though the way. The way is a narrow path, but clear for those who can calm themselves enough to see the right colors, and hear the right calls.</Paragraph>
            
            <Paragraph>Allow it to talk to you, allow it to show you the way, in all modalities, the way is surely there to be learned.</Paragraph>
            
            <SectionTitle>Sailing</SectionTitle>
            
            <Paragraph>I always analyzed how the process of learning and mastering a new interest was very similar, and how in that specific little universe, the fundamental questions to be answered were the same as to the great game of life.</Paragraph>
            
            <Paragraph>For a time I got really into sailing, and every weekend would go into this world of sailing, most of the time it would be me and the boat, and me trying to improve on this thing, to get stronger, to learn how to steer better, to tack faster, to optimize every little part of the sail. And though this you could ask yourself, why am I doing this? What's the purpose of the sail, what makes it fun? How do I master this thing?</Paragraph>
            
            <Paragraph>The way of iterating on the process, everytime getting stuck in your progress, searching for the limiting factor, to then breakthrough and see a period of expansion, followed by overexpansion into a new limiting factor, taking you again back to the drawing board, finding and refining the fundamental principles of this craft, going deeper and deeper into it.</Paragraph>
            
            <Paragraph>You see, the questions of this mini universe of the sail, are the same problems as our big universe, and our human condition. Questioning yourself on this, and being conscious about your interactions, intent, and desires will make you learn the way in even the smallest of things. Is it the destination or the journey that matters in the sail? Why do I need to get better and compete? How do I take the most out of this? Presence, purpose, meaning, victory, defeat, exploration, comfort, defiance and fear. What do these things make of me? And what do I make of them?</Paragraph>
            
            <Paragraph>It's not about the sail, or the violin, the piano, the dancing and the painting. It is about learning what this is all about, finding and understanding the process of processes, the life of lifes and the nature of nature.</Paragraph>
            
            <Paragraph>For those who listen, it will always talk back.</Paragraph>
          </Content>
          <StyledLink to="/blog" style={{ marginTop: '1rem', display: 'inline-block' }}>
            {content.backToHome}
          </StyledLink>
        </RightColumn>
      </Container>
    </>
  )
}

export default Post4
