interface IGetTagProps {
  id: string;
  'aria-controls': string;
}

export const getTagProps = (index: number): IGetTagProps => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
