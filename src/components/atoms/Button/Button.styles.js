import styled  from "styled-components";

export const StyledButton = styled.button`
    margin: 15px;
    padding: 7px 20px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: bold;
    background-color: $${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    color: ${({ theme }) => theme.colors.darkGrey};
`;