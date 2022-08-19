import styled from "styled-components";

export const Friends = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    width: 300px;
`;

export const OneFriend = styled.li`
    box-sizing: border-box;
    width: 300px;
    height: 100px;
    display: flex;
    margin-bottom: 10px;
    gap: 15px;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: 1px -1px 4px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
${({ isOnline }) => isOnline ? 'background-color:  green;': 'background-color:  red;'}
`;

export const FriendPhoto = styled.img`
    width: 85px;
    height: 85px;
`;

export const FriendName = styled.p`
    font-size: 25px;
    font-width:450px;
    background-color:
`;
