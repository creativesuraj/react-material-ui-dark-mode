import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useChangeTheme } from './react-material-ui-dark-mode';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';

const Home: React.FC = ()=>{
  const theme = useTheme();
  const changeTheme = useChangeTheme();
  return (
    <div style={{height: 720}}>
    <IconButton
      title="Toggle light/dark mode"
      onClick={()=>changeTheme()}
    >
      {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
    <Typography>
      Clicking on the Toggle Icon above will change my color
    </Typography>
    </div>
  )
}

export default Home;