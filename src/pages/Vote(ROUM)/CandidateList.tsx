import React, { useState } from "react";
import { VoteProps } from "./Vote";
import { TextItem } from "./VotePresenter";

const CandidateList = (
  candidate: VoteProps["candidates"]
  //isResult: VoteProps["isResult"]
): JSX.Element => {
  return (
    <>
      <TextItem width="5rem">{candidate.name}</TextItem>
    </>
  );
};

export default CandidateList;
