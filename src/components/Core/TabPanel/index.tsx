import React from 'react';

interface ITabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: ITabPanelProps) => {
  return (
    <section
      style={{ height: '90%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <>{children}</>}
    </section>
  );
};

export default TabPanel;
