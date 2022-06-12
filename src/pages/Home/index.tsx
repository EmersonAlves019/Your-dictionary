import React from 'react';

import WordInfos from '../../components/Container/WordInfos';
import WordLIstNavbar from '../../components/Container/WordListNavbar';
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.HomePageContainer>
      <WordInfos />
      <WordLIstNavbar />
    </S.HomePageContainer>
  );
};

export default Home;
