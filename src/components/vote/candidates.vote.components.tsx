import { Grid, Card, Text, Divider, Row, Button } from "@nextui-org/react";
import { useState } from "react";
import BackData from "./BackData";
import FrontData from "./FrontData";
import VoteModal from "./modal.vote.components";
import "./candidates.vote.components.css";

type CandidatesProps = {
  isLoggedIn: boolean;
  part: boolean;
};

function Candidates({ isLoggedIn, part }: CandidatesProps) {
  const [frontUsers, setFrontUsers] = useState(FrontData);
  const [backUsers, setBackUsers] = useState(BackData);
  const [visible, setVisible] = useState(false);
  const [voteUser, setVoteUser] = useState(0);
  const [voteName, setVoteName] = useState("");
  const [voteCount, setVoteCount] = useState(0);
  const [voteImage, setVoteImage] = useState("");
  function handler() {
    setVisible(true);
  }
  if (part === true) {
    return (
      <div className="Contain">
        {!isLoggedIn ? (
          <div className="Candidates">
            {frontUsers.map((user, i) => {
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
                        height={300}
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
                          disabled
                          size="small"
                          color="primary"
                          rounded
                          ghost
                          onClick={() => {
                            setVoteName(user.name);
                            setVoteCount(user.vote);
                            setVoteImage(user.image);
                            setVoteUser(user.id);
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
        ) : (
          <div className="Candidates">
            {frontUsers.map((user, i) => {
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
                        height={300}
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
                            setVoteImage(user.image);
                            setVoteUser(user.id);
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
        )}

        <VoteModal
          visible={visible}
          setVisible={setVisible}
          candidateName={voteName}
          candidateVote={voteCount}
          candidateImage={voteImage}
          candidateId={voteUser}
          setData={setFrontUsers}
          data={frontUsers}
        />
      </div>
    );
  } else {
    return (
      <div className="Contain">
        {!isLoggedIn ? (
          <div className="Candidates">
            {backUsers.map((user, i) => {
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
                        height={300}
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
                          disabled
                          size="small"
                          color="primary"
                          rounded
                          ghost
                          onClick={() => {
                            setVoteName(user.name);
                            setVoteCount(user.vote);
                            setVoteImage(user.image);
                            setVoteUser(user.id);
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
        ) : (
          <div className="Candidates">
            {backUsers.map((user, i) => {
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
                        height={300}
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
                            setVoteImage(user.image);
                            setVoteUser(user.id);
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
        )}

        <VoteModal
          visible={visible}
          setVisible={setVisible}
          candidateName={voteName}
          candidateVote={voteCount}
          candidateImage={voteImage}
          candidateId={voteUser}
          setData={setBackUsers}
          data={backUsers}
        />
      </div>
    );
  }
}

export default Candidates;
