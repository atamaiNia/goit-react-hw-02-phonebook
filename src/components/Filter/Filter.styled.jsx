import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  max-width: 352px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
  text-align: center;
  color: #8c827b;
  font-style: italic;
`;

export const Input = styled.input`
  font-size: 22px;
  color: #b37e89;
  font-weight: 700;
  height: 22px;
  padding: 5px;
  border: 1px solid #2a1301;
`;
