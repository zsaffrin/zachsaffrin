import { Redirect, Route, Switch } from 'wouter';
import { Theme } from './Theme';
import GlobalStyle from './GlobalStyle';
import { MainHeader } from './MainHeader';
import { Home } from './Home';
import { About } from './About';

const Main = () => {
  return (
    <Theme>
      <GlobalStyle />
      <MainHeader />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </Theme>
  );
};

export default Main;
