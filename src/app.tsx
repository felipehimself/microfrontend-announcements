import { AppProvider } from './providers';
import { MfeRoutes } from './routes';

const App = () => {
  return (
    <AppProvider>
      <MfeRoutes />
    </AppProvider>
  );
};

export default App;
