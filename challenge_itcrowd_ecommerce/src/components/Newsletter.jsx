import styled from "styled-components";
import SendSharpIcon from '@mui/icons-material/SendSharp';

const Container = styled.div`
    height: 60vh;
    background-color: whitesmoke; /* Change color again */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;

`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white; /* Color... */
    display: flex;
    justify-content: space-between;
    border: 1px lightgray; /* Color.. */
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 30px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: coral; /* Quizas quede mejor con algo mas oscuro, mas pesoo.. */
    color: whitesmoke;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>
            NOTICIAS
        </Title>
        <Description>
            Recibe actualizaciones constantes de tus productos favoritos.
        </Description>
        <InputContainer>
            <Input placeholder="Email!"/>
            <Button>
                <SendSharpIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter