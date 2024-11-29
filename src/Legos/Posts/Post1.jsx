import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/Images/P1_Back.jpg'

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

function Post1() {
  const content = {
    title: "Object at the End of Time",
    subtitle: "A Brief Study of Truth",
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
            <Paragraph>This is a brief study of truth. Even though we may not yet have the complete truth in our hands, we can still study what it may be and what properties the object of truth possesses. If you are not familiar with the concepts of mathematics or some of the Socratic ways of thinking, you might find it strange to call truth an object. But just hold on, in this book I will develop the ideas of the object of truth, and soon we will be able to view the object of truth in it of itself.</Paragraph>
            
            <Paragraph>To understand truth we must first understand the search for truth and the different ways we conventionally search for it, and slowly notice that by changing the mechanism by which we search it, we change the definition of truth, and in turn the object at hand. In this manner this book is also an attempt to unify all those different definitions of truth.</Paragraph>
            
            <SectionTitle>What is truth?</SectionTitle>
            
            <Paragraph>We can understand truth as being the correct answer. In a way when someone tells the truth, he is answering or stating the facts correctly. When you tell your kid to tell the truth, what you mean is that he gives you an accurate description of what happened, not what he wants you to think that happened.</Paragraph>
            
            <Paragraph>In this manner the truth is the correct description, the right representation of reality. You can easily see how these concepts apply to simple questions, like "who has the most world cups?" and the correct answer, given the truth about what happened in the previous world cups would be "Brazil!!". When describing historical events that are not subjective (subjective events: asking if someone or something was beneficial or not to history), then truth can be very straightforward.</Paragraph>
            
            <Paragraph>Let us expand that concept as truth as the correct description to the realm of science, when we scientists search for the truth we search for the correct description of the material in which we work with, which is nature herself. The so longed truth in science would be a theory, who would always explain all things, from the biggest stars, to the smallest particle. This brilliant theory would be able to explain the origins of life, of the universe, and all hard questions we can think of. Also abiding to the law of verification this theory would predict the behavior of any system, in infinitesimal precision.</Paragraph>
            
            <Paragraph>That theory, for more idealized that it may seem, is the dream of any man or woman who searches to explain nature, be it in biology, physics or chemistry. The scientific method tries to get as close as it can to that theory, iterating on itself, by the process of the so infamous scientific method, that has been proved incredibly accurate over the last five hundred years.</Paragraph>
            
            <Paragraph>You see, every generation of scientist tries to connect the phenomenon they see around them with some sort of explanation, Newton proposed the law of universal gravitation, only to later be incorporated into a bigger theory that was the theory of relativity, just the same way biology can be explained or connected to chemistry which in turn is connected to the laws of quantum mechanics.</Paragraph>
            
            <Quote>Feynman had an amazing analogy for this, let's suppose the gods are playing a great game of chess, and you are allowed to look at a piece of the board from time to time, and from this observations you try to find out what the rules are, that dictates the movement of the pieces.</Quote>
            
            <Paragraph>Early on you notice how when there is only one bishop around, it always maintains its color, but later on you might discover that the law for the bishop is that it moves on the diagonal. And just like gravity, one explanation was incorporated into a larger one. The orbit of the planets, and this mysterious force, explained by the curvature of space-time.</Paragraph>
            
            <Paragraph>In a way you can say that the law, the explanation, was always there, it always existed, but we don't know it from the start. So we use a process of guessing and verifying to try to find the rules. The rules of chess exist, even if we do not know them. Just the same way that the laws and patterns that govern the universe exist, even though we do not know them.</Paragraph>
            
            <Paragraph>This may seem of no importance, but it is interesting to see how the object itself, the pattern, the system that governs the great game, exists. And so we can begin to study its properties, and its implications.</Paragraph>
            
            <SectionTitle>The many faces of truth</SectionTitle>
            
            <Paragraph>If we think of truth only as the explanation to physical phenomenon, or the correct description of past events, then it would be pretty straightforward to understand the concept of the object of truth. You could almost imagine as a static rock, the universe's equivalent of the hammurabi code, in it would be written all the laws and all events that ever happened. What a simple, and boring universe that would be!</Paragraph>
            
            <Paragraph>But as we get our heads above the vast oceans of scientific theory, we are greeted with concepts of great discussion of the ancient world, concepts like: good, evil, beauty, love.</Paragraph>
            
            <Paragraph>When we introduce these concepts, things start to get more complicated, what does good mean? If we use our previous definition of truth, what is the correct description of good itself? Now we get to a problem far bigger. And I am in no position to answer that question head on, and I don't intend on that, I simply wish to study where that answer might be, and how it connects with the previous definition of truth, and in turn try to get to the object of truth itself.</Paragraph>
            
            <Paragraph>The philosophers believed that if you go further and further up in the platonic world of ideas, then you would finally get to the truth, in a way, getting to pure thought, the pure idea. Some may question if there is one idea which unifies all, in the philosophical sense, one singular thing where all ideas originate. Something like the concept of happiness, that is created by the concept of purpose, that in turn is created by the concept of life, and so on and so on all the way to the fundamental ideas. I'm not trying to draw specific lines. In the other side though, we have science witch tries to explain and unify natural theories, getting ever so close to a theory of everything, trying to go the opposite direction from the philosophers, tracing lines from ideas to fundamental laws of matter, from life to biology to organic chemistry all the way to the so called fundamental laws of physics. Now we can ask, which side will reach the truth?</Paragraph>
            
            <SectionTitle>The great tree of knowledge</SectionTitle>
            
            <Paragraph>Instead of thinking of truth as a search for the fundamental in each side, think of it like the connection between the top of the branches of a tree and the bottom of the roots, a spectrum connecting both sides of philosophy, the classical philosophy and the natural philosophers, this system of connections (you could also think of it like the connections of the brain) would go from the fundamental law of physics all the way to the concepts of good and bad.</Paragraph>
            
            <Paragraph>Passing through the chemistry of reductive agents, to the biology of humans and metabolism of living beings, all the way to human interactions and finally to the high level concepts. My argument here is that such an object exists. I believe the truth is not a high level idea, or a fundamental law, but the intricate ways that both connect. It's not just about reaching the highest branch or digging to the deepest root, but about understanding how every part of the tree is interconnected and interdependent.</Paragraph>
            
            <Paragraph>Going back to the analogy of the game of chess, this system of connections would be able to trace a path from the way the bishop moved, which is a fundamental law of the game, all the way to if that move was good or bad. Within it, all strategies, openings and possibilities of the game. This object exists in the game of chess, in the same form it exists to our universe. The game of chess is a very good example because just like the real world we do not have complete knowledge of the object of truth that exists within the game. The rules were made, and together with the high level ideas as winning and losing, created the complexity of the system, and encompassing this complexity the object of truth arose. Even with all the known ways to play the game, there is nothing that keeps a new young player from discovering a strategy winning the championships by storm. Notice the word discover. The new strategy of the young player always existed in the completeness of the object describing the game. The new strategy was always within the object of truth.</Paragraph>
            
            <SectionTitle>The object at the end of time</SectionTitle>
            
            <Paragraph>Now that we are acquainted with this object, let's expand its definition, and see its implications. This object of truth, would have every connection between both sides of philosophy, in addition to that it would have every action ever done, and how it connects to both fundamental laws, which explain how the act was done, and the abstract side, saying what was the effect of the act in the whole. Let's say someone from a village, in rage, puts fire in one of the houses, and only one person gets hurt, a young man, he has a slight burn on his leg. With limited knowledge of the object of truth, we can only see so far in the chessboard, and might think this act, was bad, but maybe the next day the army came and the young boy wasn't recruited for war, because of the burn he had, then when looking at the totality of the situation the act had a good effect. This is very similar to the famous story of the Chinese farmer, the taoist tale, that illustrates how in a complex system you couldn't know what outcome something will have.</Paragraph>
            
            <Paragraph>The same way if you look at only a portion of the chessboard, sacrificing a piece may make no sense at all, and be a horrible move, but if only you knew what was happening in the whole board you would know that in fact this created something good.</Paragraph>
            
            <Paragraph>Every person, city, society or even species, has only partial knowledge of this object, we do not know its complete structure, and we do not know how it all connects, for it is not possible for us humans to grasp the complete truth. But we still strive to get closer and closer to this object.</Paragraph>
            
            <Paragraph>Understanding a law of nature is like knowing a small branch of the tree, and we slowly get to know more about which bigger branch it sits on, and how it connects to the trunk and the other branches. Better than the analogy of the tree, I like to think of a system of thin threads swirling and connecting, like neurons. This object, is the description of reality, and in turn the object of truth itself, as time goes, as events in the universe go on, we begin to see the evolution of the system, and the connections rearrange themself to correctly describe that instance of the world, maybe something that was beneficial to the whole at a certain time, is actually bad when the system is given enough time to develop. In that way if you want the absolute object of truth, not only to have in hand the nest of threads that connects all knowledge, but also its last instant. The object at the end of time.</Paragraph>
            
            <Paragraph>The last instant of the object of truth, would describe how every action played out, how every physical phenomenon worked, and how every action affected the whole, also including the correct way of connecting it all. Only by knowing the last instant can you correctly say if something was truly good or bad, for all action has ceased, and now only the image of the last instant of time shines through eternity.</Paragraph>
            
            <SectionTitle>Determinism and free will</SectionTitle>
            
            <Paragraph>In this manner, everything is slowly being dissolved into that object, into the last instant of the object of truth. This raises questions about the free will of beings in this system, because if the object at the end of time, can be predicted given the full knowledge of the object in a previous instant, then it means that all action was predetermined before it happened. To visualize this, let's make this system simpler. Let's make the whole universe a tiny two meter by two meter box, floating in space, with perfectly elastic walls. If you have a perfectly elastic ball in the middle, and you know its speed and position at any instant, then you could in theory calculate any instant of the system. In this system its object of truth is the complete laws that govern and describe the behavior of the ball, all the way to if the position of the ball is good or bad, even though it's hard to understand how in this case a position could mean anything such as good or bad.</Paragraph>
            
            <Paragraph>In this small box universe, there is no free will, for the system is deterministic, and it would be possible to calculate its development. In this universe, any instance of the object of truth can describe the last instant of the universe ( if there is one, and the system does not go forever), and so is the object at the end of time. For it exists independent of the instance of time it is located on. This object of truth would be immutable in the face of time.</Paragraph>
            
            
          <Paragraph>I dislike to think that our universe is as simple as the universe of the ball, and we do not currently know if our universe is deterministic or not. But we can understand that the object of truth exists even if it is immune to time or not. For in every instant of time there is a solution to the correct connections, that would describe reality, up to that instant.</Paragraph>
        </Content>
        <StyledLink to="/blog" style={{ marginTop: '1rem', display: 'inline-block' }}>
          {content.backToHome}
        </StyledLink>
      </RightColumn>
      </Container>
    </>
  )
}

export default Post1