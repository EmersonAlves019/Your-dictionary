import React from 'react';

import { Typography, Paper } from '@mui/material';

import { useDictionary } from '../../../context/YourDictionaryContext';
import Audio from '../Audio';
import * as S from './styles';

const WordInfos: React.FC = () => {
  const { wordInfos } = useDictionary();
  return (
    <S.WordInfosContainer>
      <Paper elevation={0}>
        <Typography variant="h3">{wordInfos?.word}</Typography>
        <Typography>{wordInfos?.phonetic}</Typography>
        <S.WordInfosContent>
          <Typography>{wordInfos?.definition}</Typography>
        </S.WordInfosContent>
        <Audio src={wordInfos?.audio || null} />
      </Paper>
    </S.WordInfosContainer>
  );
};

export default WordInfos;
