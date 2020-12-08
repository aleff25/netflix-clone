/* eslint-disable no-shadow */
import React, { useState, useContext, createContext } from 'react';

import {
  Container, Inner, Title, Frame, Item, Header, Body
} from './styles';

const ToggleContext = createContext();

function Accordion({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...rest }) {
  return <Title {...rest}>{ children }</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...rest }) {
  return <Frame {...rest}>{ children }</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...rest }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...rest}>{ children }</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...rest }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return <Header onClick={() => setToggleShow((toggleShow) => !toggleShow) } {...rest}>{ children }</Header>;
};

Accordion.Body = function AccordionBody({ children, ...rest }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...rest}>{ children }</Body> : null;
};

export default Accordion;
