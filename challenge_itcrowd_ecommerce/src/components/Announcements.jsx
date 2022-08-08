import { Link } from 'react-router-dom';
import styled from 'styled-components'
import '../assets/Announ.css'

const Container = styled.div`
    height: 30px;
    background-color: teal; /* Change color */
    color: white; /* Change color */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Navegacion = styled.ul`
  width:80%;
  display: flex;
  justify-content: space-around;
  align-items:center;
`;

const LinksNav = styled.li`
  list-style: none;
`;

const Announcements = () => {
  return (
    <Container>
      <Navegacion>
        <LinksNav><Link to='/' className='link'>Home</Link></LinksNav>
        <LinksNav><Link to='/products/jeans' className='link'>Jeans</Link></LinksNav>
        <LinksNav><Link to='/products/coat' className='link'>Camperas</Link></LinksNav>
        <LinksNav><Link to='/products/women' className='link'>Remeras</Link></LinksNav>
      </Navegacion>
    </Container>
  )
}

export default Announcements