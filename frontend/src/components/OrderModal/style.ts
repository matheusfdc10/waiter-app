import styled from "styled-components";

export const Overlay = styled.div`
  left: 0px;
  top: 0px !important;
  margin-top: 0% !important;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-body {
    background-color: #fff;
    width: 480px;
    border-radius: 8px;
    padding: 32px;

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > strong {
        font-size: 24px;
      }

      > button {
        line-height: 0;
        border: 0;
        background: transparent;
      }
    }

    .status-container {
      margin-top: 32px;

      > small {
        font-size: 14px;
        opacity: 0.8;
      }

      > div {
        margin-top: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    .order-details {
      margin-top: 32px;

      > strong {
        font-weight: 500;
        font-size: 14px;
        opacity: 0.8;
      }

      > div {
        margin-top: 16px;

        .item {
          display: flex;

          & + div {
            margin-top: 16px;
          }

          > img {
            border-radius: 6px;
          }

          > span {
            font-size: 14px;
            color: #666;
            display: block;
            min-width: 20px;
            margin-left: 12px;
          }

          > div {
            margin-left: 4px;

            > strong {
              display: block;
              margin-bottom: 4px;
            }

            > span {
              font-size: 14px;
              color: #666;
            }
          }
        }

        .total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 24px;

          > span {
            font-weight: 500;
            font-size: 14px;
            opacity: 0.8;
          }
        }
      }
    }

    > footer {
      display: flex;
      flex-direction: column;
      margin-top: 32px;

      > button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .primary {
        background-color: #333333;
        border-radius: 48px;
        border: 0;
        color: #fff;
        padding: 12px 24px;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
      }

      .secundary {
        padding: 14px 24px;
        color: #d73035;
        font-weight: bold;
        border: 0;
        background-color: transparent;
        margin-top: 12px;
      }
    }
  }
`;
