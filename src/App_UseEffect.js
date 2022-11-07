import './App.css';
import { useEffect, useState, useMemo } from 'react';


function App() {
  console.count('App mounted');
  const [num, setNum] = useState(0);
  const [clock, setClock] = useState(0);
  const [user, setUser] = useState({
    name: "",
    isActive: false
  })

  const addOne = () => {
    setNum(prev => prev + 1)
  }
  //pass by values vs pass by reference
  const handleUserName = (e) => {
    e.preventDefault();
    setUser(prev => ({ ...prev, name: e.target.userName.value }))
  }

  const handleIsActive = () => {

    setUser(prev => ({ ...prev, isActive: !user.isActive }))
  }

  // const memoUser = useMemo(() => ({
  //   name: "",
  //   isActive: false
  // }), [user.name, user.isActive])

  useEffect(() => {
    const timer = setInterval(() => {
      setClock(current => current + 1)
    }, 1000);
    return () => clearInterval(timer)
  }, [clock])
  useEffect(() => {
    console.count('useEffect ran');
  }, [user.name, user.isActive])
  return (
    <main className='App-header'>
      <h3>Number: {num}</h3>
      <button onClick={addOne}>add one</button>
      <h3>User name: {JSON.stringify(user.name)}</h3>
      <h3>is Active: {JSON.stringify(user.isActive)}</h3>
      <br />
      <form onSubmit={(e) => handleUserName(e)}>
        <input type="text" name='userName' />
        <br />
        <input type="submit" value="change name" />
        <button onClick={handleIsActive}>change is active</button>
      </form>
      <div>Clock: {clock}</div>

    </main>
  );
}

export default App;
