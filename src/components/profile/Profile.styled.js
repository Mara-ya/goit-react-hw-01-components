import styled from "styled-components";

export const UserCard = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 1px -1px 4px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  padding-top: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const AdditionalInfo = styled.p`
  color: #999;
  font-weight: 400;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  height: 75px;
  background-color: #f3f6f4;
  margin-top: auto;
  border-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(300px / 3);
  border: 1px solid #bcbcbc;
  box-sizing: border-box;
`;

export const StatsLabel = styled.span`
  color: #999;
  margin-bottom: 5px;
`;

export const StatsQuantity = styled.span`
  font-size: 16px;
  font-weight: 500;
`;