import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import AddAccountButton from './AddAccountButton';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

export default class AddAccountDialog extends React.Component {
  state = {
    accountName: '',
    currentBalance: '',
    currentBalanceDate: '',
    accountType: '',
    onBudget: '',
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.name, ":", event.target.value);
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <div>
        <AddAccountButton onClick={this.handleClickOpen}/>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a New Account</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              name="accountName"
              margin="normal"
              label="Name"
              type="text"
              placeholder="New Account"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              name="currentBalance"
              margin="normal"
              label="Current Balance"
              type="number"
              placeholder="0.00"
              inputProps={{step: 0.01}}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              name="currentBalanceDate"
              margin="normal"
              label="Date of Current Balance"
              type="date"
              defaultValue={new Date().toISOString().split('T')[0]}
              onChange={this.handleChange}
              fullWidth
            />
            <FormControl 
              fullWidth
              margin="normal"
            >
              <InputLabel htmlFor="account-type">Type</InputLabel>
              <Select
                value={this.state.accountType}
                onChange={this.handleChange}
                inputProps={{
                  name: 'accountType',
                  id: 'account-type',
                }}
              >
                <MenuItem value="">
                  <em>Select an Account Type...</em>
                </MenuItem>
                <MenuItem value="Checking">Checking</MenuItem>
                <MenuItem value="Savings">Savings</MenuItem>
                <MenuItem value="Credit">Credit Card</MenuItem>
              </Select>
            </FormControl>
            <FormControl component="fieldset" required margin="dense">
              <RadioGroup
                name="onBudget"
                value={this.state.onBudget}
                onChange={this.handleChange}
              >
                <FormControlLabel value="true" control={<Radio />} label="Budget Account" />
              </RadioGroup>
              <FormHelperText>This account should affect my budget</FormHelperText>
              <RadioGroup
                name="onBudget"
                value={this.state.onBudget}
                onChange={this.handleChange}
              >
                <FormControlLabel value="false" control={<Radio />} label="Off-Budget" />
              </RadioGroup>
              <FormHelperText>This account should not affect my budget</FormHelperText>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button 
              onClick={() => {
                this.props.onCreateAccount(
                  this.state.accountName,
                  this.state.currentBalance,
                  this.state.currentBalanceDate,
                  this.state.accountType,
                  this.state.onBudget
                );
                this.handleClose();
              }}
              color="secondary"
              variant="raised"
            >
              Create Account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}