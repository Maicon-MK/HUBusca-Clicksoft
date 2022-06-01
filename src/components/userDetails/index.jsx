import {
    Container,
    Name,
    Username,
    Location,
    Id


} from './styles';


const UserDetails = props => (
    <Container>
        <Name>{props.name}</Name>
        <Username>#{props.login}</Username>
        <Location>Locazição: {props?.location}</Location>
        <Id>ID: {props?.id}</Id>
    </Container>
);

export default UserDetails;