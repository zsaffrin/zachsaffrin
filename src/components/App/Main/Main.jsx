import { Theme } from './Theme';
import GlobalStyle from './GlobalStyle';
import { MainHeader } from './MainHeader';
import { Home } from './Home';

const Main = () => {
  return (
    <Theme>
      <GlobalStyle />
      <MainHeader />
      <Home />
    </Theme>
  );
};

export default Main;
