import React from "react";
import { createTheme } from "@mui/material/styles";
import {
  CardContent,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";

const Form = () => {
  const [state, setState] = React.useState("");
  const [mode, setMode] = React.useState("dark");

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  //Array of Indian States
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh ",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "National Capital Territory of Delhi",
    "Puducherry",
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className="Form">
        <Typography gutterBottom variant="h3" align="center">
          Form
        </Typography>
        <Button variant="contained" onClick={handleModeChange}>
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
        <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              gutterBottom
              color="textSecondary"
              variant="body2"
              component="p"
            >
              Fill up the form.
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email "
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="date"
                    label="Date Of Birth"
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      inputProps: { min: "1900-01-01", max: "9999-12-31" },
                    }}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="number"
                    label="Phone "
                    placeholder="Enter phone number"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <InputLabel id="state-label">State</InputLabel>
                  <Select
                    labelId="state-label"
                    id="state"
                    value={state}
                    onChange={handleStateChange}
                    fullWidth
                    required
                    variant="outlined"
                  >
                    {/* <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                  <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                  <MenuItem value="Bihar "> Bihar</MenuItem> */}
                    {indianStates.map((stateName) => (
                      <MenuItem key={stateName} value={stateName}>
                        {stateName}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here "
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        
      </div>
    </ThemeProvider>
  );
};

export default Form;
