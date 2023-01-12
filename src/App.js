import { useState, useEffect } from 'react';


import CardList from './component/card-list/cradlist.component';
import SearchBox from './component/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterdMonsters, setFilterdMonsters] = useState(monsters);

  console.log('renderd');

  const onSearchField = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilterdMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterdMonsters(newFilterdMonsters);
  }, [monsters, searchField]);

  return (
      <div className="App">
      <SearchBox 
      onSearchHandler={onSearchField}
      className='monsters-search-box'
      placeholder='search monsters'
      />
      <h1 className='app-title'>Monsters Rolodex</h1>
       <CardList monstoers={filterdMonsters}/>
     </div>
  );
}

export default App;
