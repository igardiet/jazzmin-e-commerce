import Context from './context/Context';
import RoutesPath from './routes/RoutesPath.jsx';

function App() {
  return (
    <div>
      <Context >
        <RoutesPath />
      </Context>
    </div>
  );
}

export default App;