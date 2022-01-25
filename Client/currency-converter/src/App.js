import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const action = ()=> {
    alert('test');
  }
  return (
    <div className="App" >
      <Container maxWidth="sm">
        <Box sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform:' translate(-50%, -50%)'
        }} >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>          
                <TextField id="outlined-basic"  variant="outlined" />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>          
                <TextField id="outlined-basic"  variant="outlined" />
              </Item>
            </Grid>
          </Grid>
          <Button variant="contained" onClick={action}>Convert</Button>
         </Box>
      </Container>
    </div>
  );
}

export default App;
