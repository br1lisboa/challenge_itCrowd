import styled from "styled-components";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { MailOutlineOutlined } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: whitesmoke; /* Color cambiar */
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
    `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    `;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    `;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>XXXXX.</Logo>
            <Desc>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus aut error, ab velit amet culpa alias inventore corporis aperiam impedit tempora vero earum, cumque maiores sint qui dolore nisi.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookSharpIcon />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links de interes</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Carrito</ListItem>
                <ListItem>Moda Hombres</ListItem>
                <ListItem>Moda Mujeres</ListItem>
                <ListItem>Accesorios</ListItem>
                <ListItem>Mi cuenta</ListItem>
                <ListItem>Trackeo de ordenes</ListItem>
                <ListItem>Lista de deseos</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Terminos y condiciones</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <MapOutlinedIcon style={{marginRight:'10px'}} />
                Av. Siempre Viva 740
            </ContactItem>
            <ContactItem>
                <HeadphonesOutlinedIcon style={{marginRight:'10px'}}/>
                +123 4345 5452
            </ContactItem>
            <ContactItem>
                <MailOutlineOutlined style={{marginRight:'10px'}}/>
                contact@example.com
            </ContactItem>
            <Payment src='https://e7.pngegg.com/pngimages/805/227/png-clipart-paypal-the-next-level-service-payment-gateway-industry-paypal-text-payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer