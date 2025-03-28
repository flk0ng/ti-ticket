import { Flex, Container, Input, Title, Text, Table, ScrollArea, Group, Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';


const HomeUser = () => {
    const navigate = useNavigate();

    const handleAddUser = async () => {
        navigate('/users/add')
    }
    const handleListUser = async () => {
        navigate('/users/list')
    }
    return (
        <Container >
            <Title order={2}>
                Inicio de Usuarios
            </Title>

            <Flex>

                <Text>
                    Listado de Usuarios
                </Text>

                <Input
                    title='Buscar'
                    placeholder='Buscar Usuario'
                    rightSectionPointerEvents='all'
                />
            </Flex>
            <ScrollArea style ={{minWidth: 800, minHeight: 300}}>
                <Table striped highlightOnHover withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Nombre</Table.Th>
                            <Table.Th>Apellido</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Area</Table.Th>
                            <Table.Th>Cargo</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {/* Aquí deberías mapear los datos de los usuarios */}
                        <Table.Tr>
                            <Table.Td>Ejemplo</Table.Td>
                            <Table.Td>Usuario</Table.Td>
                            <Table.Td>ejemplo@correo.com</Table.Td>
                            <Table.Td>TI</Table.Td>
                            <Table.Td>Desarrollador</Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </ScrollArea>
            <Group justify='center' mt='xl'>

                <Button
                    onClick={handleAddUser}
                    color='green'
                >
                    Agregar Usuario
                </Button>

                <Button
                    onClick={handleListUser}
                    color='blue'
                >
                    Ver Mas
                </Button>

            </Group>
        </Container>
    );
};

export default HomeUser;