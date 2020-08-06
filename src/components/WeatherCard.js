import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
} from "reactstrap";
import "./weathercard.css";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherCard = ({ name, description, icon, temp, mintemp, maxtemp }) => {
  return (
    <Col sm="6" md="4" lg="3" className="pl-0">
      <Card className="cardbgw grow">
        <CardImg
          className="cardimgpro"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <CardText className="cardStatus">{description}</CardText>
        <CardBody>
          <CardTitle className="tc cardtitpro">{name}</CardTitle>
          <CardSubtitle className="cardTemps">
            <Row>
              <Col>
                <span className="celsSign">{Math.round(temp)} °C</span>
              </Col>
              <Col>
                <p id="minmaxtemp">
                  <FontAwesomeIcon
                    className="icoBlue"
                    icon={faArrowAltCircleDown}
                  />{" "}
                  {Math.round(mintemp)}
                </p>
                <p id="minmaxtemp">
                  <FontAwesomeIcon
                    className="icoRed"
                    icon={faArrowAltCircleUp}
                  />{" "}
                  {Math.round(maxtemp)}
                </p>
              </Col>
            </Row>
          </CardSubtitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WeatherCard;
