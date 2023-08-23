import styled from 'styled-components';



export const Wrapper = styled.div`
border: 1px solid black;
border-radius: 10px;
overflow: hidden;
box-shadow: 4px 4px 8px black;

`

export const ProfilInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
padding: 40px;

`

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: gray;
`;

export const Name = styled.p`
font-size: 30px;
font-weight: 700;
`
export const Text = styled.p`
  color: gray;
  font-size: 20px;

`

export const StatsWrapper = styled.ul`
display: flex;
justify-content: center;
padding: 40px;

`

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 4px;
  background-color: gainsboro;
  border: 1px solid black;
  width: 70px;

`
export const StatsText = styled.span`
  font-weight: 700;
  color: darkgrey;
`;