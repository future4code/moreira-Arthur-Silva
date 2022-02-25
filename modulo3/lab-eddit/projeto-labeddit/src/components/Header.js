import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { goToLoginPage } from '../routes/coordinator'; 
import { useNavigate } from 'react-router-dom';
//import MenuIcon from '@mui/icons-material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {

  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography style={{cursor: "pointer"}} onClick={() => goToLoginPage(navigate) } variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LabEdit
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}