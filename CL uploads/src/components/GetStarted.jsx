import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { styled, useColorScheme } from "@mui/material/styles";
import UploadFile from "./UploadFile";
import MorphingCV from "./MorphingCV";
import MorphingCVDark from "./MorphingCVDark";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import { Card, SignInContainer } from "../pages/SignIn";
import { keyframes } from '@emotion/react';
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ForgotPassword from "./ForgotPassword";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: <MorphingCVDark />,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&blend=000000&blend-mode=normal&blend-alpha=60")',
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function GetStarted() {
  const { mode, systemMode, setMode } = useColorScheme();
  const { currentUser } = useCurrentUserContext();
  const [name, setName] = React.useState(currentUser?.name);
  const [target, setTarget] = React.useState(
    "https://www.seek.co.nz/job/123456789"
  );
  const [templates, setTemplates] = React.useState([1, 2, 3]);
  const [key, setKey] = React.useState("••••••••••••••••••••••••");
  const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
  // const formArr =[]

  // const form =
  // <FormControl fullWidth>
  //   {formArr.map((form) => {

  //   })}
  // </FormControl>

  return (
    <>
      <Box
        id="hero"
        sx={(theme) => ({
          minWidth: "86vw",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
          ...theme.applyStyles("dark", {
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
          }),
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
          >
            {/* <SitemarkIcon /> */}
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
              }}
            >
              Let's
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                wordBreak: "break-word",
                fontSize: "clamp(3rem, 10vw, 3.5rem)",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Go!
            </Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
                my: "20%",
              }}
            >
              <FormControl fullWidth sx={{ gap: 2, animation: `${fadeIn} 1s ease-in forwards`}}>
                <FormLabel htmlFor="name">Applicant's name</FormLabel>
                <TextField
                  // error={emailError}
                  // helperText={emailErrorMessage}
                  id="name"
                  type="text"
                  name="name"
                  placeholder={name}
                  autoComplete="url"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  onChange={() => setName(e.target.value)}
                  // color={emailError ? 'error' : 'primary'}
                />
                <FormLabel htmlFor="url">Target Seek URL</FormLabel>
                <TextField
                  // error={emailError}
                  // helperText={emailErrorMessage}
                  id="url"
                  type="url"
                  name="url"
                  placeholder={target}
                  autoComplete="url"
                  autoFocus
                  required
                  variant="outlined"
                  fullWidth
                  onChange={() => setTarget(e.target.value)}
                  // color={emailError ? 'error' : 'primary'}
                />
                <FormLabel htmlFor="number">Select template</FormLabel>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="template"
                  onChange={(e) => setTemplates(e.target.value)}
                >
                  {templates.map((template) => (
                    <MenuItem value={template}>{template}</MenuItem>
                  ))}
                </Select>
                <FormLabel htmlFor="text">ChatGPT Key</FormLabel>
                <TextField
                  // error={passwordError}
                  // helperText={passwordErrorMessage}
                  name="password"
                  placeholder={key}
                  type="password"
                  id="text"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  onChange={() => setKey(e.target.value)}
                  // color={passwordError ? 'error' : 'primary'}
                />
              </FormControl>
              <UploadFile />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}