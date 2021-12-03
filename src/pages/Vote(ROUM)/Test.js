import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState(null);
  const onClick1 = () => {
    axios
      .get("https://chatminder.cf/polls/candidates")
      .then((response) => {
        //setData(reponse.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={onClick1}>후보 리스트 버튼</button>
    </>
  );
};

export default Test;
