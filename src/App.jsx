
import ItemList from './component/ItemsList';
import './index.css';

function App() {
  const items = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='mb-10 text-2xl font-bold'>My Item List</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
