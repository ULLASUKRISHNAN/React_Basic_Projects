import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    type: '',
    msg: '',
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'Please Enter the Value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Item Updated');
    } else {
      showAlert(true, 'success', 'List Updated ');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'List Is Cleared');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item Removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handelSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>List</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery-form'
            placeholder='eg. Eggs...'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'Update' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        {list.length > 0 ? (
          <List items={list} removeItem={removeItem} editItem={editItem} />
        ) : (
          ''
        )}
        <button className='clear-btn' onClick={clearList}>
          clear it
        </button>
      </div>
    </section>
  );
}

export default App;
