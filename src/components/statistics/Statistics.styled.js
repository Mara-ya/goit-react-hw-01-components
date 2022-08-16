import styled from "styled-components";

export const StatisticsList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    width: 300px;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: 1px -1px 4px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const StatisticsTitle = styled.h2`
    text-align: center;
`;

export const StatisticsItem = styled.li`
    box-sizing: border-box;
    display: inline-grid;
    height: 50px;
    width: calc(300px / 5);
    align-items: center;
    justify-content: center;
    border: 1px solid #bcbcbc;
`;

export const StatisticsLabel = styled.span`
    text-align: center;
    font-size: 13px
`;

export const StatisticsPercentage = styled.span`
    text-align: center;
    // font
`;