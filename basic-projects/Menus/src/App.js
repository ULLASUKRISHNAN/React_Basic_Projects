import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//fetching the unique category
const getCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(getCategories);

  // filter the menu based on category
  const filterMenu = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }

    //Update the Categories
    const newCategories = items.filter((item) => item.category === category);
    setMenu(newCategories);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Menu Plans</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenu={filterMenu} categories={categories} />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
