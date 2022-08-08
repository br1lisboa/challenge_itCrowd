import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)),
        url('https://previews.123rf.com/images/tatianakost/tatianakost1411/tatianakost141100091/34031113-multicolor-la-ropa-de-moda-de-punto-patr%C3%B3n-sin-fisuras-en-style-autumn-incompleto-invierno-primavera.jpg') center;
        display: flex;
        align-items: center;
        justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: coral;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &disabled{
        color:green;
        cursor:not-allowed;
    }
`;
const Link = styled.a`
    margin: 5px 0px;
    font-style: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Error = styled.span`
    color:red;
`;

const Login = () => {

    const user = useSelector((state) => state.user.currentUser);

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }

    return (
        <>
        {user && <Navigate to="/" />}
            <Container>
                <Wrapper>
                    <Title>INGRESAR</Title>
                    <Form>
                        <Input placeholder='Usuario' onChange={(e) => setUsername(e.target.value)} />
                        <Input placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <Button onClick={handleClick} disabled={isFetching}>INGRESAR</Button>
                        {error && <Error>Algo no salio como esperabamos..</Error>}
                        <Link>No recuerdas tu contraseña?</Link>
                        <Link>Crear una nueva cuenta</Link>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Login