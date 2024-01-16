import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Center,
} from "@chakra-ui/react";

export default function ProductCard({
  src,
  heading,
  desc,
  price,
}: {
  src: string;
  heading: string;
  desc: string;
  price: string;
}) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Center>
          <Image
            src={src}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height={250}
          />
        </Center>

        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <Text>{desc}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="main" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="main-outline" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
