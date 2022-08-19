import React from 'react';
import './App.css'
import {Typography,styled,Box} from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';

const Header = styled(Typography)`
margin: 10px 0;
font-size: 35px;
text-transform: uppercase;
color: blue

`

function App() {
  return (
    <div className='App'>
        <Header>Expense Tracker</Header>
        <Box>
            <Box>
                <Balance/> 
                <ExpenseCard/>
            </Box>
            <Box></Box>
        </Box>
    </div>
  )
}

export default App