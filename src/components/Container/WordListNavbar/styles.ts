import { Box, Paper, Tab } from '@mui/material';
import styled from 'styled-components';

export const ListTabContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 80%;
  max-width: 550px;
  max-height: 800px;

  .MuiTab-root {
    color: #333232;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: 55%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    height: 60%;
    padding-bottom: 50px;
  }
`;

export const Nav = styled(Box)`
  top: 0;
  width: 100%;
`;

export const TabItem = styled(Tab)`
  width: 33%;
`;
