
import React, { useContext } from 'react';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumber';


import { context } from '../context';

export default function Home() {
    const ctx = useContext(context);
    return (
        <Container>
            <Header />
            <UserContainer>
                {ctx.userData?.name ?
                    <React.Fragment>
                        <UserPicture url={ctx.userData?.avatar_url} alternativText={ctx.userData?.login} />
                        <UserDetails name={ctx.userData?.name} login={ctx.userData?.login} location={ctx.userData?.location} id={ctx.userData?.id} />
                        <UserNumbers repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                    </React.Fragment>
                    : undefined}
            </UserContainer>
        </Container>
    );
}