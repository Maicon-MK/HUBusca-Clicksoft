import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumber';


export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url='https://avatars.githubusercontent.com/u/88468371?v=4' alternativText="image" />
                <UserDetails name="Michael Ferreira"  login="#Maicon-MK" bio="Um texto qualquer" />
                <UserNumbers/>
            </UserContainer>
        </Container>
    );
}