import { Redirect, useRoute } from 'wouter';
import { Main } from './Main';

const App = () => {
  const [match] = useRoute("(|about)");

  if (match) {
    return <Main />;
  } else {
    return <Redirect to="/" />;
  }
};

export default App;
