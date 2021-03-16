import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleSheets from './googlesheets';

function calculate(igUsername) {
  var params = {
    "range":"Sheet1!A2:A3",
    "majorDimension": "ROWS",
    "values": [
      [igUsername],
   ],
  }
  //https://developers.google.com/oauthplayground/?code=4/0AY0e-g4dRWwKk4Ia_Ug0jsgWF49lcPbiU41nWnKy6sMgoyazx_F30iKI9TMcGDGl8unvPQ&scope=https://www.googleapis.com/auth/drive%20https://www.googleapis.com/auth/drive.readonly%20https://www.googleapis.com/auth/drive.file%20https://www.googleapis.com/auth/spreadsheets.readonly%20https://www.googleapis.com/auth/spreadsheets
  var accessToken = 'ya29.a0AfH6SMCOTVIl9qNKmWBZZKUV4g2ZUmvonB3Mdli-ZfW-tWGYl3-xBId5IQuW16Z_gUFzsI453Ov-9M0Iy9ugCjcOJGP4FulovF3yYZ5uJvjahSia3Mmoa-YXVUZMCqDHoi9XvfMsvxrREgcOwhVOgkRAwn1T'; 
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', 'https://sheets.googleapis.com/v4/spreadsheets/'+'1RxH5BLpesXy4UvpBzrmBGTELZleh442NrywgJVpCnqw'+'/'+"values/"+"Sheet1!A2:A3"+'?'+'valueInputOption=USER_ENTERED');
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
  xhr.send(JSON.stringify(params));

  setTimeout(function() {
    window.location.reload(false);
  }, 4000);
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Inked Sports
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [igUsername, setIgUsername] = useState("aaa");

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MonetizationOnIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inked Sports Price Value Calculator
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="IG Username"
                name="email"
                autoComplete="email"
                onChange={text => setIgUsername(text.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <GoogleSheets>

          </GoogleSheets>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => { calculate(igUsername) }}
          >
            Calculate
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
