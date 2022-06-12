import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useDictionary } from '../../../context/YourDictionaryContext';
import WordCard from '../../Core/WordCard';
import * as S from './styles';

interface IWordListProps {
  wordList: string[] | null;
}

const WordListPagination: React.FC<IWordListProps> = ({ wordList }) => {
  const { setPage } = useDictionary();

  return (
    <S.WordListContainer id="infiniteContainer">
      <InfiniteScroll
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        dataLength={wordList?.length ?? 0}
        next={() => {
          return setPage(prev => {
            return prev + 1;
          });
        }}
        hasMore
        loader={<h4>Loading...</h4>}
        scrollableTarget="infiniteContainer"
      >
        {wordList?.map(word => {
          return <WordCard key={word + Math.random()} word={word} />;
        })}
      </InfiniteScroll>
    </S.WordListContainer>
  );
};

export default WordListPagination;
