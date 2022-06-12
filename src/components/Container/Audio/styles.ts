import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import styled from 'styled-components';

export const AudioContainer = styled(AudioPlayer)`
  border-radius: 8px;
  width: 90%;
  .rhap_progress-filled,
  .rhap_progress-indicator {
    background-color: #1565c0;
  }
`;
