import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

import { login } from "@/service/login";

export const Card = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };


  return (
    <Box backgroundColor={"#fff"} maxWidth={350} borderRadius={25} padding={5}>
      <Center color={"#000"}>
        <Text textStyle={"2xl"} fontWeight={"bold"} my={2}>
          Faça login
        </Text>
      </Center>
      <Input
        onChange={handleChange}
        required
        placeholder="Email"
        type="email"
        my={1}
        color={"blackAlpha.600"}
      />
      <Input
        placeholder="Password"
        required
        type="password"
        my={1}
        color={"blackAlpha.600"}
      />
      <Center margin={5}>
        <Button
          onClick={() => login({ email })}
          colorPalette={"blue"}
          color={"#fff"}
          variant="solid"
          size="lg"
          width={"100%"}
        >
          Entrar
        </Button>
      </Center>
    </Box>
  );
};
