import { useRouteError } from 'react-router-dom';

const ErrorRoute = () => {
  const error = useRouteError();
  console.error(error);

  return error ? (
    <div>
      <h1>{`${error.status} - ${error.statusText}`}</h1>
      <div>{error.data}</div>
    </div>
  ) : (
    <div>
      <h1>Error</h1>
      <p>Something went wrong</p>
    </div>
  );
};

export default ErrorRoute;
