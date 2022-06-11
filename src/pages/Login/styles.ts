import { Paper } from '@mui/material';
import styled from 'styled-components';

export const LoginPageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1565c0;
`;

export const LoginFormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 90vw;
  height: 80vh;
  min-height: 460px;
  max-height: 600px;
  max-width: 500px;
`;
