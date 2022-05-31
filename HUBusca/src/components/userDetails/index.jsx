import{
    Container,
    Name,
    Username,
    Location,
    Description
   
} from './styles';


const UserDetails = props =>(
    <Container>
        <Name>{props.name}</Name>
        <Username>{props.login}</Username>
        <Description>{props?.bio}</Description>
        <Location>{props?.location}</Location>
    </Container>
);

export default UserDetails;