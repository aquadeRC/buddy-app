import styled  from "styled-components";

export const StyledButton = styled.button`
    margin: 15px;
    padding: ${({isBig}) => isBig ? '10px 38px': '7px 20px'};
    font-size: ${({ isBig, theme:{fontSize} }) => (isBig ? fontSize.m : fontSize.s)};
    font-weight: bold;
    background-color: $${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    color: ${({ theme }) => theme.colors.darkGrey};
`;