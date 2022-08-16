import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 600px;
//  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 1px -1px 4px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-spacing: 0;
`;

export const TranHead = styled.thead`
width: 100%;
box-sizing: border-box;
background-color: #76E5FD;
color: #fff;
`;

export const TranHeadTh = styled.th`
padding: 10px;
border: 0.5px solid #e1e1e1;
width: calc(600px / 3);
box-sizing: border-box;
`;

export const TranBodyTr = styled.tr`
width: 100%;
box-sizing: border-box;
border: 0.5px solid #e1e1e1;
&:nth-child(2n){
    background-color: #f3f6f4;
}
`;

export const TranBodyTd = styled.td`
width: calc(600px / 3);
border:  0.5px solid #e1e1e1;
padding: 5px;
`;