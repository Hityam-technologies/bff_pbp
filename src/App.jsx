import { BrowserRouter } from 'react-router-dom';
import AppNavigator from './navigation/AppNavigator';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fafaf8] text-stone-900">
        <AppNavigator />
      </div>
    </BrowserRouter>
  );
}

export default App;
