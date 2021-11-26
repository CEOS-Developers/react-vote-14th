import { Grid, Card, Row, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
import "./mainpage.components.css";

function MainPage() {
  return (
    <div className="Cards">
      <Grid.Container justify="center">
        <Grid className="Display">
          <Link to="/frontend">
            <Card bordered hoverable clickable width="500px" height="450px">
              <Card.Body noPadding>
                <Card.Image
                  objectFit="cover"
                  src="/images/React.png"
                  height="500px"
                  alt="CEOS 15기 프론트엔드 파트장 투표하러 가기"
                />
              </Card.Body>
              <Card.Footer className="Footer">
                <p>CEOS 15기 프론트엔드 파트장 투표하러 가기</p>
              </Card.Footer>
            </Card>
          </Link>
          <Link to="/backend">
            <Card bordered hoverable clickable width="500px" height="450px">
              <Card.Body noPadding>
                <Card.Image
                  objectFit="cover"
                  src="/images/django.png"
                  height="500px"
                  alt="CEOS 15기 백엔드 파트장 투표하러 가기"
                />
              </Card.Body>
              <Card.Footer className="Footer">
                <p>CEOS 15기 백엔드 파트장 투표하러 가기</p>
              </Card.Footer>
            </Card>
          </Link>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default MainPage;
