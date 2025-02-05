import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import DataForm from './components/DataForm';
import TextEditor from './components/TextEditor';

const App = () => {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    if (localStorage.getItem('count')) {
      setCount(parseInt(localStorage.getItem('count')));
    }
    if (localStorage.getItem('formData')) {
      setFormData(JSON.parse(localStorage.getItem('formData')));
    }
  }, []);

  return (
    <div
      className="parent-container"
      style={{
        background: `rgb(0, 0, 0, ${
          1 - (count <= 15 ? count / 100 : (count + 30) / 300)
        })`,
      }}
    >
      <div className="container">
        <Counter count={count} setCount={setCount} />
        <DataForm formData={formData} setFormData={setFormData} />
        <TextEditor />
      </div>
      <div className="animation"></div>
    </div>
  );
};

export default App;
