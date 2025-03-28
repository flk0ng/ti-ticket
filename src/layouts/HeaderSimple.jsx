import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/HeaderSimple.module.css';
import { NavLink } from 'react-router';

const links = [
  { link: '/', label: 'Inicio' },
  { link: '/users', label: 'Usuarios' },
  { link: '/pricing', label: 'Office' },
  { link: '/learn', label: 'Windows' },
  { link: '/community', label: 'Equipos' },
  { link: '/more', label: '+' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
        toggle();
      }}
    >
      {link.label}
    </NavLink>
    
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}