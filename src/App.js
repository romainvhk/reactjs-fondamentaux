import './App.css';
import ProductPage from './Pages/ProductPage';
import CountPage from './Pages/CountPage'
import TodoListPage from './Pages/TodoListPage';

function App() {

  return (
    <div className="App">
      <TodoListPage/>
      <CountPage/>
      <ProductPage/>
    </div>
  );
};

export default App;
