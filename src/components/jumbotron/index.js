import React from 'react';
import {
  Item, Inner, Container, Pane, Title, SubTitle, Image
} from './styles';

function Jumbotron({ children, direction = 'row', ...rest }) {
  return (
    <Item {...rest}>
      <Inner direction={direction}>
        { children }
      </Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...rest }) {
  return (
    <Container {...rest}>
      { children }
    </Container>
  );
};

Jumbotron.Pane = function JumbotronPane({ children, ...rest }) {
  return (
    <Pane {...rest}>
      { children }
    </Pane>
  );
};

Jumbotron.Title = function JumbotronTitle({ children, ...rest }) {
  return (
    <Title {...rest}>
      { children }
    </Title>
  );
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...rest }) {
  return (
    <SubTitle {...rest}>
      { children }
    </SubTitle>
  );
};

Jumbotron.Image = function JumbotronImage({ ...rest }) {
  return (
    <Image {...rest} />
  );
};

export default Jumbotron;
