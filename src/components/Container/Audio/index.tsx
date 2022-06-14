import React from 'react';

import * as S from './styles';

interface IAudioPlayerProps {
  src: string | undefined;
}

const Audio: React.FC<IAudioPlayerProps> = ({ src }) => {
  return (
    <>{src && <S.AudioContainer autoPlayAfterSrcChange={false} src={src} />}</>
  );
};

export default Audio;
