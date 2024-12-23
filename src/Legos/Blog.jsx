import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/Images/Blog_Back.jpg'

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
  flex: 1;
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

const Section = styled.section`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #4a4a4a;
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #b8860b;
  line-height: 1.1;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 0.7rem;
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

function BlogHome() {
  const content = {
    welcome: "Ian's Blog",
    tagline: "Searching to ask the right questions",
    recentPosts: "Recent Posts",
    posts: [
      { title: "Object at the End of Time", route: "/blog/post1" },
      { title: "Purpose and Presence", route: "/blog/post2" },
      { title: "Can you still see the human?", route: "/blog/post3" },
      { title: "The Way in All Things", route: "/blog/post4" }
    ],
    backToHome: "Back to Home"
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <LeftColumn>
          <IllustrationImage src={backgroundImage} alt="Blog Illustration" />
        </LeftColumn>
        <RightColumn>
          <Header>
            <Title>{content.welcome}</Title>
            <Subtitle>{content.tagline}</Subtitle>
          </Header>
          <Section>
            <SectionTitle>{content.recentPosts}</SectionTitle>
            <List>
              {content.posts.map((post, index) => (
                <ListItem key={index}>
                  <StyledLink to={post.route}>
                    {post.title}
                  </StyledLink>
                </ListItem>
              ))}
            </List>
          </Section>
          <StyledLink to="/">{content.backToHome}</StyledLink>
        </RightColumn>
      </Container>
    </>
  )
}

export default BlogHome
