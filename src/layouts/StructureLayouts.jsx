import { useDisclosure } from "@mantine/hooks";
import { NavbarSimple } from "./NavbarSimple";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";
import { Suspense, useMemo } from "react";
import { FullScreenLoader } from "../components/FullScreenLoader";


function StructureLayouts() {

    const [opened, setOpened] = useDisclosure();
    const navmemo = useMemo(() => {return <NavbarSimple/>}, []);
   return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 270,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        {headmemo}
      </AppShell.Header>
      <AppShell.Navbar p="sm">
        {navmemo}
      </AppShell.Navbar>      
      <AppShell.Main>
          <Suspense  fallback={<FullScreenLoader />}>
            <Container fluid pt={70} pb={60}>
              <Outlet />
            </Container>
          </Suspense>
      </AppShell.Main>
      <AppShell.Footer>
        {footmemo}
      </AppShell.Footer>
    </AppShell>
  );
}

export default StructureLayouts;
