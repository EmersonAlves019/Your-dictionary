import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import styled from 'styled-components';

export const FavoriteWordContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const FavoriteIcon = styled(AiFillHeart)`
  width: 100%;
  height: 100%;
  color: #f44336;
`;

export const FavoriteIconEmpty = styled(AiOutlineHeart)`
  width: 100%;
  height: 100%;
`;
