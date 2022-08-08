import { Link, /* Navigate */ } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: whitesmoke; /* Change color whit some var */
    margin-bottom: 20px;
`;
const Button = styled.div`
    border: none;
    padding: 10px;
    background-color: whitesmoke; /* Como siempre, cambiar color por alguna var */
    color: gray; /* Change color */
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>COMPRAR AHORA</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem