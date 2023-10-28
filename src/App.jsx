
import { useState } from 'react'
import QRCode from 'qrcode'


function App() {
  const[url ,setUrl]=useState('')
  const[qrcode, setQrcode]=useState('')

const GenerateQR =()=>{
  QRCode.toDataURL(url,{
    width:800,
    margin:2

  },(err,url)=>{
    if(err) throw err;

    console.log(url)
    setQrcode(url)
  })
 
}

  return (
    <div className='app'>
      <h1>Qr Generator </h1>
      <input type="text"
      placeholder="Enter Text Here "
      value={url}
      onChange={(evt=>setUrl(evt.target.value))}
      />
      <button onClick={GenerateQR}>Generate</button>
      { qrcode && <>
      
        <img src={qrcode} />
        <a href={qrcode} download={url}>Download</a>
      </>
      }
    </div>
  )
  
}

export default App
