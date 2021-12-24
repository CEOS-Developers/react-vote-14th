import { Grid, Card, Text, Divider, Row, Button } from "@nextui-org/react";
import { useState } from "react";
import Data from "./Data";
import VoteModal from "./modal.vote.components";
import "./candidates.vote.components.css";

function Candidates() {
  const [users, setUsers] = useState(Data);
  const [visible, setVisible] = useState(false);
  const [voteName, setVoteName] = useState("");
  const [voteCount, setVoteCount] = useState(0);

  function handler() {
    setVisible(true);
  }
  return (
    <div className="Contain">
      <div className="Candidates">
        {users.map((user, i) => {
          return (
            <Grid key={i} className="Card">
              <Card>
                <Card.Header justify="center">
                  <Text b>{user.name}</Text>
                </Card.Header>
                <Divider y={0} />
                <Card.Body>
                  <Card.Image
                    objectFit="cover"
                    autoResize={false}
                    src={user.image}
                    width="100%"
                    height={140}
                    alt={user.name}
                  />
                </Card.Body>
                <Divider y={0} />
                <Card.Footer>
                  <Row justify="center" className="btns">
                    <Button disabled size="small" rounded>
                      현재 투표수: {user.vote}
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      rounded
                      ghost
                      onClick={() => {
                        setVoteName(user.name);
                        setVoteCount(user.vote);
                        handler();
                      }}
                    >
                      투표하기
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </div>
      <VoteModal
        visible={visible}
        setVisible={setVisible}
        candidateName={voteName}
        candidateVote={voteCount}
      />
    </div>
  );
}

export default Candidates;
