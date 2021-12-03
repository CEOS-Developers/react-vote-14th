import React, { useState } from "react";
import { VoteProps } from "./Vote";
import { Text, TextBox } from "./VotePresenter";

const CandidateList = (candidate: VoteProps["candidates"]): JSX.Element => {
  return (
    <>
      <Text>{candidate.name}</Text>
      <Text>{candidate.votes}</Text>
    </>
  );
};

export default CandidateList;
