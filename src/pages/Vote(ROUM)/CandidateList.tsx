import React, { useState } from "react";
import { VoteProps } from "./Vote";
import { Text, TextBox } from "./VotePresenter";

const CandidateList = (candidate: VoteProps["candidates"]): JSX.Element => {
  return (
    <>
      <Text width="5rem">{candidate.name}</Text>
      <Text width="3rem">{candidate.votes} 표</Text>
    </>
  );
};

export default CandidateList;
