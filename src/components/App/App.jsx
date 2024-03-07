import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Home } from './Home';
import ErrorRoute from './ErrorRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorRoute />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
