import React, { useEffect, useRef } from "react";

import {
  StyledContactSection,
  StyledContactHeaderText,
  StyledIconLi,
  StyledContactList,
  StyledTextWrapper,
  StyledContactInfoH3,
  StyledContactWrapper,
} from "./StyledContact";

import ContactForm from "./ContactForm";
import iconEmail from "../../assets/images/svg/iconemail.svg";
import iconPhone from "../../assets/images/svg/iconphone.svg";

import { animationMoveXScroll, animationScrollBottom } from "../../style/Animations";

const Contact = React.forwardRef((props, ref) => {
  const hederTextRef = useRef(null);
  const contactTextWrapperRef = useRef(null);

  useEffect(() => {
    const headerText = hederTextRef.current;
    const textWrapper = contactTextWrapperRef.current;

    animationScrollBottom(headerText);
    animationMoveXScroll(textWrapper, "-=100");
  }, []);

  return (
    <StyledContactSection ref={ref}>
      <div ref={hederTextRef}>
        <StyledContactHeaderText>Skontaktuj się z nami</StyledContactHeaderText>

        <StyledContactInfoH3>
          Wypełnij krótki formularz, wyślij e-mail lub zadzwoń do nas!
        </StyledContactInfoH3>
      </div>
      <StyledContactWrapper>
        <StyledTextWrapper ref={contactTextWrapperRef}>
          <h4>Nasze biuro</h4>
          <StyledContactList>
            <li>Krakowska 15, Kraków</li>
            <li>15-000</li>
            <li>Radek</li>
            <li>
              <StyledIconLi src={iconEmail} /> <span>serwis@naszokraj.eu</span>
            </li>
            <li>
              <StyledIconLi src={iconPhone} has={true} /> <span>+48 509 411 729</span>
            </li>
            <li>Lidka</li>
            <li>
              <StyledIconLi src={iconEmail} /> <span>prezes@naszokraj.eu</span>
            </li>
            <li>
              <StyledIconLi src={iconPhone} has={true} /> <span>+48 508 563 321</span>
            </li>
          </StyledContactList>
        </StyledTextWrapper>
        <ContactForm />
      </StyledContactWrapper>
    </StyledContactSection>
  );
});

export default Contact;
