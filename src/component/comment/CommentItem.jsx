import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import axios from "axios";

export function CommentItem({ comment, isProcessing, setIsProcessing }) {
  function handleRemoveClick() {
    setIsProcessing(true);
    axios
      .delete(`/api/comment/remove`, {
        data: { id: comment.id },
      })
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {
        setIsProcessing(false);
      });
  }

  return (
    <Box key={comment.id} border={"1px solid black"} my={3}>
      <Flex>
        <Box fontWeight={"bold"}>{comment.nickName}</Box>
        <Spacer />
        <Box>{comment.inserted}</Box>
      </Flex>
      <Flex>
        <Box>{comment.comment}</Box>
        <Spacer />
        <Box>
          <Button
            isLoading={isProcessing}
            colorScheme={"red"}
            onClick={handleRemoveClick}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
