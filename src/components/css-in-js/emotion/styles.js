import styled from "@emotion/styled";

export const Card = styled.div`
  margin-bottom: 10px;
  padding: 20px 30px;
  //height: 200px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => (props.cardChange ? "#5B80D8" : "#F0F47F")};
  border-radius: 10px;
  .title {
    margin-bottom: 20px;
  }
  .subtitle {
    margin-bottom: 10px;
  }
`;

export const Btn = styled.button`
  margin-top: 30px;
  padding: 10px 0;
  width: 100px;
  border-radius: 5px;
  border-style: none;
  color: white;
  background-color: #59c1b5;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(119, 136, 112);
  }
`;
