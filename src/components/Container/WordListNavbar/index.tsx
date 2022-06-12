import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';

import { useDictionary } from '../../../context/YourDictionaryContext';
import { getTagProps } from '../../../shared/functions/getTableProps';
import TabPanel from '../../Core/TabPanel';
import WordHistoryList from '../WordHistoryList';
import WordList from '../WordList';
import * as S from './styles';

const WordLIstNavbar: React.FC = () => {
  const [value, setValue] = useState(0);

  const { wordList, wordHistory } = useDictionary();

  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<number>,
  ) => {
    setValue(newValue);
  };

  return (
    <S.ListTabContainer elevation={8}>
      <S.Nav sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} style={{ width: '100%' }}>
          <S.TabItem label="Word list" {...getTagProps(0)} />
          <S.TabItem label="History" {...getTagProps(1)} />
          <S.TabItem label="Favorites" {...getTagProps(1)} />
        </Tabs>
      </S.Nav>

      <TabPanel value={value} index={0}>
        <WordList wordList={wordList} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WordHistoryList wordList={wordHistory} />
      </TabPanel>
    </S.ListTabContainer>
  );
};
export default WordLIstNavbar;
