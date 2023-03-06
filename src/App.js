import ContextProvider from './context/Context';
import RoutesPath from './routes/RoutesPath.jsx';

function App() {
  return (
    <div>
      <ContextProvider>
        <RoutesPath />
      </ContextProvider>
    </div>
  );
}

export default App;