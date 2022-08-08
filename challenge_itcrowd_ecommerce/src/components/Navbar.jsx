import { Badge } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height:60px; 
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Lenguage = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey; /* Change colors */
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const NavBar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Lenguage>ES</Lenguage>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'gray', fontSize: 16 }} /> {/* Change colors */}
                    </SearchContainer>
                </Left>
                <Center><Logo>ITCROWD ECOMMERCE</Logo></Center>
                <Right>
                    <MenuItem>REGISTRATE</MenuItem>
                    <MenuItem>INGRESA</MenuItem>
                    <Link to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar