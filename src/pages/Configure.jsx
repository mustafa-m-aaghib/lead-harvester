import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Configure = () => {
  const [threshold, setThreshold] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");

  const handleThresholdChange = (e) => setThreshold(e.target.value);
  const handleDomainChange = (e) => setDomain(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <FormControl id="domain">
          <FormLabel>Target Domain</FormLabel>
          <Input type="text" value={domain} onChange={handleDomainChange} />
        </FormControl>
        <FormControl id="threshold">
          <FormLabel>Set Lead Threshold</FormLabel>
          <Input type="number" value={threshold} onChange={handleThresholdChange} />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Lead Description</FormLabel>
          <Input type="text" value={description} onChange={handleDescriptionChange} />
        </FormControl>
        <Button as={Link} to="/results" colorScheme="teal" size="lg">Save and Fetch Leads</Button>
      </VStack>
    </Container>
  );
};

export default Configure;