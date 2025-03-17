import { useDisclosure } from "@mantine/hooks";
//import { NavbarSimple } from "./NavbarSimple";
import { AppShell, Center } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";
import { Suspense, useMemo } from "react";
import { FullScreenLoader } from "../layouts/FullScreenLoader";
import { HeaderSimple } from "./HeaderSimple";
import { FooterSimple } from "./FooterSimple";


function StructureLayouts() {

    const [opened, ] = useDisclosure();

    const headmemo = useMemo(() => {return <HeaderSimple/>}, []);
    const footmemo = useMemo(() => {return <FooterSimple/>}, []);
    //const navmemo = useMemo(() => {return <NavbarSimple/>}, []);
   return (
    <AppShell
      header={{ height: 56 }}

      padding="md"
    >
      <AppShell.Header style={{display: 'flex', justifyContent: 'flex-end'}}>
        {headmemo}
      </AppShell.Header>    
      <AppShell.Main>
          <Suspense  fallback={<FullScreenLoader/>}>
            
              <Outlet />
           
          </Suspense>
      </AppShell.Main>
      <AppShell.Footer>
        <Center>
        {footmemo}
        </Center>
      </AppShell.Footer>
    </AppShell>
  );
}

export default StructureLayouts;
