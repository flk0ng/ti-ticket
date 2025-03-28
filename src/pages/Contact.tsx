import {Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput} from '@mantine/core';
import React from 'react';
import { ContactIconsList } from './ContactIcons';
import classes from '../styles/Contact.module.css';
import bg from '../images/bg.webp';



const Contact = () => {
    return (
      <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Informacion de contacto
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            Ingresa tus datos
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Nombre" placeholder="Your name" />
              <TextInput label="Tu email" placeholder="hello@mail.dev" required />
            </SimpleGrid>

            <TextInput mt="md" label="Asunto" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Mensaje"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Enviar contacto
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
    );
};

export default Contact;