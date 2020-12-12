import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    content:
      "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
    authorName: "JENNIFER DOE",
    authorCredentials: "Happy Customer",
    imgSrc:
      "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team3-150x150.jpg",
  },
  {
    content:
      "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
    authorName: "JOHN DOE",
    authorCredentials: "Happy Customer",
    imgSrc:
      "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team2-150x150.jpg",
  },
  {
    content:
      "Tristique nec ipsum. Utquis ornare erat. Duis et urna sit amet nulla one venenatis and Aenean a cursus purus asellus non mauris maximus, tincidunt duivel et urna sit amety nulla one venenatis Aenean and cursus purus asellus.",
    authorName: "SARA DOE",
    authorCredentials: "Happy Customer",
    imgSrc:
      "https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/team1-150x150.jpg",
  },
];

const useStyles = makeStyles({
  prevQuote: {
    backgroundColor: "#d7a274",
    width: "2px !important",
    /* right: 20vw; */
    left: "24%",
    textAlign: "center",
    color: "white",
    // fontSize: "14px",
    padding: "2px 3px",
    lineHeight: "1",
    // fontWeight: "400",
    opacity: "1",
    top: "63%",
    zIndex: "100",
    position: "absolute",
    outline: "none",
    "&:hover": {
      backgroundColor: "#d7a274",
      cursor: "pointer",
    },
    "@media (min-width: 160px) and (max-width: 600px)": {
      display: "none",
    },
  },
  NextQuote: {
    textAlign: "center",
    color: "white",
    fontSize: "14px",
    padding: "1px 2px",
    lineHeight: "1",
    fontWeight: "400",
    opacity: "1",
    backgroundColor: "#d7a274",
    cursor: "pointer",
    right: "25%",
    top: "63%",
    zIndex: "10000",
    position: "absolute",
    "&:hover": {
      backgroundColor: "#d7a274",
      cursor: "pointer",
    },
    "@media (min-width: 160px) and (max-width: 600px)": {
      display: "none",
    },
  },
});

export function SwipeableTextMobileStepper(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <ScrollAnimation
        animateIn="bounceInTop"
        animateOut="bounceInBottom"
        animateOnce={true}
        delay={500}
      >
        <S.CarouselCard>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <div>
                    <S.FontQuote>
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </S.FontQuote>

                    <S.Content>{step.content}</S.Content>
                    <S.AuthorMain>
                      <div>
                        <S.TestImg src={step.imgSrc} alt="img" />
                      </div>
                      <S.Author>
                        <S.TestimonialUser>{step.authorName}</S.TestimonialUser>
                        <S.Category>{step.authorCredentials}</S.Category>
                      </S.Author>
                    </S.AuthorMain>
                  </div>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </S.CarouselCard>
        <MobileStepper
          style={{ padding: 0 }}
          steps={maxSteps}
          position="static"
          // variant="none"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className={classes.NextQuote}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className={classes.prevQuote}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </ScrollAnimation>
    </div>
  );
}
