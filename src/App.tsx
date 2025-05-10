import { Center, ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

import Header from "./components/Header/header";
import { Card } from "./components/Card/card";
import Footer from "./components/footer";

function App() {
  return (
    <ChakraProvider value={system}>
      <Header />
      <Center backgroundColor={"blue.400"} minHeight={"80vh"}>
        <Card />
      </Center>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
