import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    Button


} from './styles';


const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]} </Title>
            <ListOfReposContainer>
                <a id='volta' href='/' >Voltar</a>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <hr />
                        <h3>Linguagem {repo?.language}</h3>
                        <h3>Criando em {repo?.created_at}</h3>
                        <h3>Ultimo push {repo?.updated_at}</h3>
                        <hr />
                        <h3>Descrição</h3>
                        <p>{repo?.description}</p>
                        <Button>
                            <a href={repo?.html_url}>Ver no Github</a>
                        </Button>

                    </Repo>


                ))}
                <a id='volta' href='/' >Voltar</a>
            </ListOfReposContainer>
        </Section>

    );
};

export default ReposContainer;