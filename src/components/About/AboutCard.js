import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const { t, i18n } = useTranslation(); 

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("quote-card-view1")} <span className="purple"> {t("quote-card-view2")} </span>
            {t("quote-card-view3")} <span className="purple"> Paris, France.</span>
            <br /> {t("quote-card-view4")} <span className="purple"> {t("quote-card-view5")} </span>.
            <br />
            {t("quote-card-view6")}
            <br />
            <br />
            {t("quote-card-view7")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about-activity1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about-activity2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about-activity3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about-activity4")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about-activity5")}
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
