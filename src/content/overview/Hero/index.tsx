import { useEffect, useState } from 'react';

import React from "react";

import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { authenticateCeramic } from '../../../utils';

import { PostProps } from '../../../types';

import {useCeramicContext} from "../../../context";

import AuthPrompt from "../did-select-popup";
      
const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() { 
  const clients = useCeramicContext()
  const { ceramic, composeClient } = clients
  const [profile, setProfile] = useState<Profile | undefined>()

  const handleLogin = async () => {
    await authenticateCeramic(ceramic, composeClient)
  }
    
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 2.0.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            ConsultEth Social
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            The decentralized super app for web3
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/dashboards/tasks"
            size="large"
            variant="contained"
          >
            <AuthPrompt/>
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://ceramic.network/how-it-works"
            size="large"
            variant="text"
          >
            Key Features
          </Button>
          <Grid container spacing={3} mt={5}>
            <Grid item md={6}>
              <MuiAvatar>
                <img
                  src="/static/images/logo/material-ui.svg"
                  alt="Material-UI"
                />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Powered by MetaMask </b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  Ethereum Wallet
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <TsAvatar>
                <img
                  src="/static/images/logo/typescript.svg"
                  alt="Typescript"
                />
              </TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Built with Ceramic </b>
                </Box>
                <Typography component="span" variant="subtitle2">
                  Self Sovereign, Decentralized Data Streams
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
