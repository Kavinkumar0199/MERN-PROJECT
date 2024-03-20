 function App() {
 const users = ["ammuj","kavin","kutta","keerthi"]

 return <>{

  users.map ((e)=>{
    return<>
    <h1>welcome to {e}</h1>
    </>
    
  })
 }
</>
}

export default App
