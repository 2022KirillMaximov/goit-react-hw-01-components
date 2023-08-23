import styled from 'styled-components';


export const SectionStatistics = styled.section`
border: 1px solid black;
border-radius: 10px;
overflow: hidden;
box-shadow: 4px 4px 8px black;

`;

export const Title = styled.h2`
  width: fit-content;
  padding: 20px 0;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 700;
`

export const StatList = styled.ul`
  display: flex;
 justify-content: center;
 padding: 0px;
`;

export const Item = styled.li`
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.span`
  padding: 4px;
  border-radius: 4px;
`;

export const Percentage = styled.span`
  padding: 4px;
  background-color: white;
  border-radius: 4px;
`;