import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  //  creating state
  const[Principle,SetPrinciple] = useState(0)
  const[Rate,SetRate] = useState(0)
  const[year,Setyear] = useState(0)
  const[interest,Setinterest] = useState(0)
  //  alert msg for validation creating state
  const [ invalidPrinciple,setinvalidPrinciple]=useState(false)
  const [ invalidRate,setinvalidRate]=useState(false)
  const [ invalidyear,setinvalidyear]=useState(false)

  // function

  const ValidateInput=(tag)=>{
    console.log(  typeof tag);
    const {name, value} = tag
    console.log(name,  value);
console.log(!!value.match(/^\d+(\.\d+)?$/));
  // (/^\d+(\.\d+)?$/)    = regular Expression
  if(name=='principle'){
    SetPrinciple(value)
    if(!!value.match(/^\d+(\.\d+)?$/)){
     
      setinvalidPrinciple(false)
    }else{
     setinvalidPrinciple(true)
    }
  }else if(name=='Rate'){
    SetRate(value)
    if(!!value.match(/^\d+(\.\d+)?$/)){
     
      setinvalidRate(false)
    }else{
     setinvalidRate(true)
    }

  }else if(   name=='year'){
    Setyear(value)
    if(!!value.match(/^\d+(\.\d+)?$/)){
     
      setinvalidyear(false)
    }else{
     setinvalidyear(true)
    }

  }
    
  }
  //  onclick funtion for button to calculate
  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("inner calculate");
    if(Principle&&Rate&&year){
  Setinterest(Principle*Rate*year/100)
    }else{
      alert("please fill the details correctly")
    }
    
  }
  const handleReset=()=>{
    Setinterest(0)
    SetPrinciple(0)
    SetRate(0)
    Setyear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidyear(false)
  }
     

  return (
    <>
    <div style={{width:'100%', minHeight:'100vh'}}className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width: '600px'}} className='bg-light rounded p-5'>

<h3 className='text-center fs-5 fw-bold'  >Simple Interest Calculator</h3>

<p className='text-center'>Calculate your simple interest Easily!</p>

<div className='bg-warning p-3 text-light text-center rounded' style={{backgroundColor:'yellow', height:'50%', padding:'15px'}}>

<h1>₹{interest}</h1>

<p className='fw-bolder'>Total Simple Interest</p>
</div>
<form className='mt-5'> 
  {/* principle amount */}
<div className='mb-3'>
    <TextField   value={Principle||" "} name='principle'  onChange={e=>ValidateInput(e.target)} className='w-100' id="outlined-Principle"     label="Principle Amount" variant="outlined" />
  
</div>
{/* invalid principle */}
 
{invalidPrinciple && <div  className='text-danger fw-bolder mb-3'> invalid principle Amount</div>}

{/*  rate of interest */}
<div className='mb-3 w-100'>
    <TextField  value={Rate||" "}  className='w-100'    id="outlined-Rate" name='Rate'  onChange={e=>ValidateInput(e.target)}   label="Rate" variant="outlined" />
  
</div>
{/* invalid rate */}
{invalidRate && <div  className='text-danger fw-bolder mb-3'> invalid principle Amount</div>}


{/* year */}
<div className='mb-3 w-100'>
    <TextField  value={year||" "}  className='w-100'   name='year'  onChange={e=>ValidateInput(e.target)} id="outlined-Year" label="Year" variant="outlined" />
  
</div>
{/* inalid year */}
{invalidyear && <div  className='text-danger fw-bolder mb-3'> invalid principle Amount</div>}

<Stack direction="row"   spacing={2}>
<Button   type='submit' onClick={handleCalculate} disabled={invalidPrinciple||invalidRate||invalidyear} style={{width:'50%', height:'70px'}}  className='bg-dark'  variant="contained">Calculate</Button>
<Button  onClick={handleReset} style={{width:'50%', height:'70px'}}  className='bg-dark'    variant="contained">Reset</Button>
</Stack>
</form>
</div>



    </div>
    </>
  )
}

export default App
