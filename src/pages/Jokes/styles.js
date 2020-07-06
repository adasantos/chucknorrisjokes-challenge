import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

export const BackButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  border-bottom: 2px solid #FFB800;
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const BackButtonText = styled.span`
  font-family: Roboto, sans-serif;  
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-left: 16px;
  color: #000;
`;

export const Content = styled.div`
  display:flex;
  margin-top: 32px;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction:column-reverse;
  }
`;

export const JokeContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;


export const Text = styled.span`
  display:flex;
  align-items:center;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  border-left: 5px solid #FFB800;
  padding-left: 16px;
  margin: 16px 0;
`;

export const Button = styled.button`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  width: 200px;
  height: 80px;
  background-color: #FFB800;
  border:none;
  border-radius: 50px;
  margin-top: 64px;
  cursor: pointer;

  &:hover{
    background-color: #FFDD87;
  }
`;


export const Image = styled.img`
  text-align: flex-end;
  max-width: 368px;
  max-height: 350px;
`;
