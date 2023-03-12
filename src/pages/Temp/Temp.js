import React from "react";
import ReactLoading from "react-loading";
import "./styles.css";
import { Box, Center } from "@chakra-ui/react";
const Loading = () => (
  <div>
    <Box minHeight={"100vh"} className={"load"}>
      <Center>
        <ReactLoading type={"spinningBubbles"} color="#fff" className="spin" />
      </Center>
    </Box>
  </div>
);

export default Loading;
