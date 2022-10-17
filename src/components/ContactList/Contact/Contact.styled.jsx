import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
`;
export const ContactInfo = styled.p`
  color: #6e7b8f;
  font-size: 18px;
  font-weight: 700;
`;
export const BtnDelete = styled.button`
  width: 85px;
  height: 35px;
  background-color: #5e4003;
  border: none;
  border-radius: 30px;
  padding: 8px;
  color: #f8f2ea;
  font-weight: 700;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #5e4003;
    background-color: white;
  }
`;
