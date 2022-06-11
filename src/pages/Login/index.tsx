import * as React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import SignInForm from '../../components/Container/SignInForm';
import SignUpForm from '../../components/Container/SignUpForm';
import TabPanel from '../../components/Core/TabPanel';
import { getTagProps } from '../../shared/functions/getTableProps';
import * as S from './styles';

const Login: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (
    _event: any,
    newValue: React.SetStateAction<number>,
  ) => {
    setValue(newValue);
  };

  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer elevation={12}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            style={{ width: '100%' }}
          >
            <Tab label="Sign In" style={{ width: '50%' }} {...getTagProps(0)} />
            <Tab label="Sign Up" style={{ width: '50%' }} {...getTagProps(1)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <SignInForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUpForm />
        </TabPanel>
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
};

export default Login;
