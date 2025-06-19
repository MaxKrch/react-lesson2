import './App.css'
import Portfolio from './components/portfolio';
import Store from './components/store';
import Dropdown from './components/dropdown';

import { projects, products, menuItems } from './const/';

function App() {
  return (
    <div className='container'>
      <Dropdown items={menuItems}/>
      <Store products={products} />
      <Portfolio projects={projects} />
    </div>
  )
}

export default App
