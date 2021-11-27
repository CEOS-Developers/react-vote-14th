import React, { useState } from "react";
import { VoteProps } from "./Vote";
import { Text, TextBox } from "./VotePresenter";

const CandidateList = (candidate: VoteProps["candidates"]): JSX.Element => {
  return (
    <>
      <Text>{candidate.candidateName}</Text>
      <Text>{candidate.count}</Text>
    </>
  );
};

export default CandidateList;
