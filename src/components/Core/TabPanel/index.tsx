import React from 'react';

import { Box } from '@mui/material';

interface ITabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: ITabPanelProps) => {
  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </section>
  );
};

export default TabPanel;
