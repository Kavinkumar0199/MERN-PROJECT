 function App() {
   
    const users = [ {
      name:"PRIYA",
      batch:"myv3"}, 

      {
        name:"KAVIN",
        batch:"myv1"},
        
        {
          name:"AMMU",
          batch:"myv2"} ]
      
  return <>
  {
    users.map((e) =>{
      return <>
      <h1> Welcome {e.name} to the batch {e.batch}</h1>
      </>
    }
    )
  }
   
  </>
  
}

export default App
