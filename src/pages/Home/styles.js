import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  display:flex;
  flex-direction:column;
`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #FFB800;
  margin: 48px 0;
`;


export const Description = styled.span`
  display: flex;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 32px;
  max-width: 568px;
`;

export const Content = styled.div`
  display:flex;
  flex:1;
  justify-content: space-between;


@media (max-width: 835px) {
    flex-direction:column-reverse;
    justify-content: center;
    align-items: center;
}
`;

export const List = styled.ul`
  display:flex;
  justify-content: center;
  width: 400px;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const ListItem = styled.li`
  list-style: none;
  display:flex;
  justify-content: center;
  border-bottom:5px solid #FFB800;
  width: 168px;
  height: 44px;
  margin-top: 16px;

  &:hover {
    background-color: #DCDCDC;
    border-bottom:5px solid #FFDD87;
  }
  
  &:nth-child(odd){
    margin-right:16px;
  }
  &:nth-child(even){
    margin-left:16px;
  }
`;

export const Text = styled.span`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
line-height: 28px;
`;

export const Image = styled.img`
  text-align: flex-end;
  max-width: 570px;
  max-height:500px;

  @media (max-width: 1200px) {
    max-width: 485px;
    max-height:350px;
  }
`;