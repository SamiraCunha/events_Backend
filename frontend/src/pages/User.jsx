import {
    TextField,
    Button,
    Grid,
    Typography,
    Container,
    Box,
    Paper,
    FormControlLabel,
    Checkbox,
    Link,
  } from "@mui/material";
  import { useFormik } from 'formik'
  export default function User() {
    const styles = {
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      },
    };
    
    return (
        <Container sx={styles.container} component="main" maxWidth="xs">
          <Box textAlign="center" m={4}>
            <Typography variant="h3" component="h1">
              User
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmi} sx={{ mt: 1 }}>
           

              <Button
                sx={{ mt: 3, mb: 2 }}
                type="submit"
                variant="contained"
                fullWidth
              >
                Organizer
              </Button>
              <Button
                sx={{ mt: 3, mb: 2 }}
                type="submit"
                variant="contained"
                fullWidth
              >
                Participant
              </Button>
            </Box>
          </Box>
        </Container>
      );
  }