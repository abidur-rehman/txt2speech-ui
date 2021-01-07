import styled from 'styled-components';
import { Button as MiButton } from '@material-ui/core';


export const Main = styled.div`
 margin: 2% 3%;
`;

export const UploadLabel = styled.label`
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px;
  cursor: pointer;
`;

export const UploadInput = styled.input`
  width: 140px;
`;

export const AreaContainer = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: inherit;
  padding: 5px;
  border-radius: 5px;
  overflow-y: scroll;
  @media screen and (min-width: 1000px) {
    width: 80%;
  }
`;

export const Button = styled(MiButton)`
  variant: ${props => props.variant}
  color: ${props => props.color};
  margin: 40px 20px 30px auto !important;
`;
