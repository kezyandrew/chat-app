import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const firebase = require("firebase");

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      loginError: ""
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Login!
          </Typography>
          <form className={classes.form} onSubmit={e => this.submitLogin(e)}>
            <FormControl required fullWidth margin='normal '>
              <InputLabel htmlFor='login-email-input'>
                Enter your Email
              </InputLabel>
              <Input
                autoComplete='email'
                autoFocus
                id='login-email-input'
                onChange={e => this.userTyping("email", e)}></Input>
            </FormControl>

            <FormControl required fullWidth margin='normal '>
              <InputLabel htmlFor='login-password-input'>
                Enter your Password
              </InputLabel>
              <Input
                type='password'
                id='login-password-input'
                onChange={e => this.userTyping("password", e)}></Input>
            </FormControl>

            <Button
              type='submit'
              className={classes.submit}
              color='primary'
              fullWidth
              variant='contained'>
              Login
            </Button>
          </form>

          {this.state.loginError ? (
            <h5 className={classes.errorText}>Incorrect Login Information</h5>
          ) : null}
          <h5 className={classes.noAccountHeader}>Don't Have an Account?</h5>
          <Link className={classes.signUpLink} to='/SignUp'>
            SignUp!
          </Link>
        </Paper>
      </main>
    );
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;
    }
  };

  submitLogin = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          this.props.history.push("/Dashboard");
        },
        err => {
          this.setState({ loginError: "server error" });
          console.log(err);
        }
      );
  };
}

export default withStyles(styles)(Login);
