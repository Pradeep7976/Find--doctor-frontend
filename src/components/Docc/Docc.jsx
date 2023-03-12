import "./Docc.css";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Docc(props) {
  let navigate = useNavigate();
  function routeChange() {
    let path = "/details/" + props.did;
    console.log(path);
    navigate(path);
  }
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        className="docc"
        onClick={routeChange}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          alignContent={"center"}
          className="imgbox"
        >
          <Image
            src={
              "https://ik.imagekit.io/aj4rz7nxsa/DOC/Free_Vector___Doctor_character_background_-20CjuGLYA.jpeg"
            }
            layout={"fill"}
            className={"docimg"}
            align={"center"}
          />
        </Box>
        <Stack>
          <Text
            color={"grey"}
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"xs"}
            letterSpacing={1.1}
          >
            {props.specialization}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"xl"}
            fontFamily={"Open Sans"}
          >
            {"Dr. " + props.name}
          </Heading>
          <Text color={"gray.500"}>
            {props.description.slice(0, 200) + " ..."}
            {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam */}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <HStack spacing={150}>
            {/* <Rating rating={parseFloat(props.rating)} /> */}
            <Stack direction={"column"} fontSize={"sm"}>
              <Text fontWeight={"bold"}>Experience</Text>
              <Text color={"gray.500"} fontWeight={"bold"}>
                {props.date}
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
}
