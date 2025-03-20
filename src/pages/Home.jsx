import { Container, Title, Text } from '@mantine/core';
import React from 'react';

const Home = () => {
    return (
        <Container align="center" justify="center" > 
            <Title order={1} >Pagina principal </Title>
            <Text order={2} >Bienvenido a la pagina principal</Text>
        </Container>
    );
};

export default Home;