import React from 'react';

import * as S from './styles';

interface IAudioPlayerProps {
  src: string | null;
}

const Audio: React.FC<IAudioPlayerProps> = ({ src }) => {
  return src ? (
    <S.AudioContainer autoPlayAfterSrcChange={false} src={src} />
  ) : null;
};

export default Audio;
