import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Your Blank Canvas</Heading>
        <Text fontSize="lg">Start building your amazing application here.</Text>
        <Button leftIcon={<FaEdit />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;