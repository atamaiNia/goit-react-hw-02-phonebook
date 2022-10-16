import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  border: 1px solid #2a1301;
  padding: 20px 10px;
`;
export const FormikLabel = styled.label`
  margin-top: 40px;
  margin-bottom: 20px;
  color: #6e7b8f;
  font-size: 22px;
  font-weight: 700;
`;
export const FormikField = styled(Field)`
  width: 255px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #412c01;
  font-size: 22px;
  color: #b37e89;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    width: 290px;
  }
`;
export const ErrorText = styled.p`
  color: red;
  font-weight: 700;
`;

export const FormikBtn = styled.button`
  margin-top: 40px;
  width: 150px;
  height: 35px;
  background-color: #5e4003;
  border: none;
  border-radius: 30px;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
  color: #f8f2ea;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
`;
