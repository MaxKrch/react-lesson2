import './App.css'
import Portfolio from './components/portfolio';
import Store from './components/store';

import { projects, products } from './const/';

function App() {
  return (
    <div className='container'>
      <Store products={products} />
      <Portfolio projects={projects} />
    </div>
  )
}

export default App
