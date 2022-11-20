import styled from "styled-components";

export const Container = styled.header`
  background-color: #d73035;
  display: flex;
  justify-content: center;
  height: 170px;
  align-items: center;

  .content {
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      > h1 {
        color: white;
        font-size: 32px;
      }

      > h2 {
        color: white;
        font-weight: 400;
        font-size: 16px;
        opacity: 0.9;
        margin-top: 6px;
      }
    }
  }
`;
