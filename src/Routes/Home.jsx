
import { GlobalContext } from '../Components/utils/global.context';
import { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(resp => {
      setUsers(resp)
    })
    .catch(error => console.error("Error", error))
  }, [])

  useContext(GlobalContext);
  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid' style={{ marginBottom: "100px" }}>
        {users.map((user, index) => <Card key={index} name={user.name} username={user.username} id={user.id}></Card>)}
      </div>
    </main>
  )
}

export default Home