import { Box, Heading } from "@chakra-ui/react";
import { CommentWrite } from "./CommentWrite.jsx";
import { CommentList } from "./CommentList.jsx";
import React, { useState } from "react";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CommentComponent({ boardId }) {
  const [isProcessing, setIsProcessing] = useState(false);
  return (
    <Box>
      <Box mb={7}>
        <Heading>
          <FontAwesomeIcon icon={faComments} /> COMMENTS
        </Heading>
      </Box>
      <Box mb={7}>
        <CommentWrite
          boardId={boardId}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
        />
      </Box>
      <CommentList
        boardId={boardId}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
      />
    </Box>
  );
}
