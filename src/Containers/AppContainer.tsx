import React from 'react';
import {
  StyleProvider,
  Container,
  Root,
} from 'native-base';

import {
  getTheme,
  theme,
} from 'src/Theme';

import Navigation from 'src/Navigation';

const AppContainer = () => {
  return (
    <Root>
      <StyleProvider style={getTheme(theme)}>
        <Container>
          <Navigation />
        </Container>
      </StyleProvider>
    </Root>
  );
};

export default AppContainer;
