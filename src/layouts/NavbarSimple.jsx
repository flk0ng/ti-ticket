import { useState } from 'react';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import classes from '../styles/NavbarSimple.module.css';

const data = [
  { link: '', label: 'Inicio', icon: IconBellRinging },
  { link: '', label: 'Ticket TI', icon: IconReceipt2 },
  { link: '', label: 'Formulario de Configuracion', icon: IconFingerprint },
  { link: '', label: 'Formulario de Entrega', icon: IconKey },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div>
    </nav>
  );
}