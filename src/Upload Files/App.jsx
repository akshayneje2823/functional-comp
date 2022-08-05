import React from 'react'

function App() {
  const upload = (event)=>{
    console.log(event.target.files)
    // const files = event.target.files;
    // const fromData = new FormData();
    // fromData.append('img',files[0]);

    // fetch("https://jsonplaceholder.typicode.com/posts",{
    //   method:"POST",
    //   body: fromData
    // }).then((response)=>{
    //   response.json().then((result)=>{
    //     console.log("result",result)
    //   })
    // })

  }
  return (
    <div className='App'>
        <h1>Upload Files</h1>
        <input 
        type="file" 
        name="img" 
        onChange={(event)=>{upload(event)}}
        />
    </div>
  )
}

export default App