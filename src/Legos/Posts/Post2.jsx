import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Images/P2_Back.jpg'

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

const Quote = styled.blockquote`
  font-style: italic;
  border-left: 2px solid #d4af37;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #b8860b;
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

function Post2() {
  const content = {
    title: "Purpose and Presence",
    subtitle: "Exploring the balance between human pursuit and experience",
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
            <Quote>"Once you understand the way broadly, you can see it in all things"<br />- Myamoto Musashi</Quote>
            
            <Paragraph>What is it that we are searching for? What is it that we value? Our world is divided in a great paradigm, on one side we have those who value the felt presence of human experience, and on the other side the age long search for the human pursuit, the expansion of the human consciousness and grasp upon the universe and the truth.</Paragraph>
            
            <Paragraph>Those who believe that presence should be the ultimate goal see little interest in expanding the sciences, growing the economy, conquering other worlds, and other pursuits of the kind, for they see that we already have the answers, we have the scientific knowhow, the food, the music and the resources to make this world a paradise, where we are all free to be present and enjoy the heat of the human experience.</Paragraph>
            
            <Paragraph>On the other side we have the long olympic march of the human grasp on nature, the expansionist view of the human condition, of the human consciousness, for generations we pass the torch, we feed it the flames of out experience, and slowly we increase our hold upon the world around us, but, not knowing what should be the destination, or even, when and where to stop.</Paragraph>
            
            <Paragraph>Many who believe in one of these pursuits or even in some combination or derivation of the same, believe that this is their calling, their purpose and how they will find happiness.</Paragraph>
            
            <Paragraph>But notice that none of the extremes are completely correct, and again the solution is found on a complex connection of the principles of both sides, both solutions, which requires us to go "one level" up in our abstraction, understanding and consciousness. In the expansionist view we walk a path without a destination, many times driven by the wrong reasons. In my belief, if this path does not put the human presence, the human flame as its goal then it's mostly a frivolous endeavor. And now if you chase purely experience you will drop the torch, you will lack the expansion of consciousness and the good of the understanding that comes with it, you will have mastered nothing, for the mastering requires the momentary sacrifice of this felt presence of immediate experience.</Paragraph>
            
            <Paragraph>You see we fall back and find the solution to one extreme as the cornerstone of the other side's ideas. How then, can we integrate both sides? how can we create a way of merging the human pursuit of the ages, the expansion of the human consciousness with the value of the human flame, how can we make purpose and presence dance together?</Paragraph>
            
            <SectionTitle>Beauty and Strength</SectionTitle>
            
            <Quote>"So many people try to invent life without realizing that it was already invented"</Quote>
            
            <Paragraph>This is one of my favorite quotes from the genius and complex book Dune. The world is caught up, searching and creating definitions for life, without realizing that however they decide to slice it, and define it, it can only be a subset of life, not the whole thing. In this we create cults, religions, countries, flags, only to try and make a life in and out of.</Paragraph>
            
            <Paragraph>Acting is already a decadence on the human soul, any philosophy of life who tries to push you into acting, will remove you from the focus of being. You must only be, for being is the ultimate act, being is expression, being is presence.</Paragraph>
            
            <Paragraph>What then shall we do? What is it that we must strive and search for?</Paragraph>
            
            <Paragraph>Here I shall propose a new way of thinking, a new way, don't search for happiness, search for beauty, and expression.</Paragraph>
            
            <Paragraph>Think of a musician, mastering a song in the violin, in the beginning he is slow, and is focused on the notes and the tempo, but as he masters the physical part of the music, he allows himself to enter a state where his brain and body move effortlessly into the notes, while he focuses only on the emotion, and in this expresses himself through the music, the same can be said for sports, a ballerina must first master the steps, memorize the steps, and get her body used to the movements, to then when mastery of the physical part of the dance is complete, express herself through the dance. The same with the painter and the sculptor, mastery must be reached for the capacity to honestly express themselves to be attained in fully.</Paragraph>
            
            <Paragraph>Humans are incapable of expressing themselves in the pure form, they must do it though something, whatever it may be, but in this moment, in this expression is when they reach the state of greatest presence, and really take the marrow out of life, to express yourself through your craft is to be fully alive, as Charles Bukowski said, "You will be alone with the gods".</Paragraph>
            
            <Paragraph>Viewing beauty as the expression of a strength, and strength being mastery in a certain modality, is in my opinion a much better goal than either solely purpose or presence, both with all their promised forms of unattainable completeness. Seaking this beauty, in the form of honest expression of the human soul, is a much more clear form of freeing the human soul and unbottling its flame when transcending the physical through a mastered craft.</Paragraph>
            
            <Paragraph>This is something you can strive towards, to find your craft expressing yourself honestly though something, not how people might want you to express yourself, but expressing yourself honestly. This can be reached in all the modalities of life, and in my opinion presence and experience itself is something to be mastered.</Paragraph>
            
            <Paragraph>How your interpretation of reality is organized is something you can shape and work on, through the mastery of presence, you can express yourself not only in the modalities but in a more broader and powerful sense, through being. Mastering presence is in my opinion the way to mastering the soul. He who has mastered presence itself can express himself through simply being.</Paragraph>
            
            <Paragraph>This is very hard to understand, but, think of the net of the object of truth in your mind, the way you connect the two sides of philosophy, it may not be the complete truth, but this interpretation of the totality is in itself a craft, the manipulations of the generators of ideas, and the sculpting of the interpretation of reality you create, is in itself a way to express yourself though the mastery of a craft.</Paragraph>
            
            <Paragraph>By manipulating the colors of his experience one can make reality the canvas in which he paints his soul, not only expressing it through the post mastery transcendence of the physical modalities, but also on the totality of his way of being.</Paragraph>
          </Content>
          <StyledLink to="/blog" style={{ marginTop: '1rem', display: 'inline-block' }}>
            {content.backToHome}
          </StyledLink>
        </RightColumn>
      </Container>
    </>
  )
}

export default Post2
