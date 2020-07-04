import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 3fr 7fr;
`;

export const PodiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const PodiumTitle = styled.div`
  p{
    font-size: 1rem;
    font-weight: 900;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`
export const Podium = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  /* background-color: white; */
  padding: 10px;
  p{
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const GoldMedal = styled.p`
  i{
    color: gold;
    font-size: 25px;
    margin: 10px 0 10px;
  }
`

export const SilverMedal = styled.p`
  i{
    color: silver;
    font-size: 25px;
    margin: 10px 0 10px;
  }
`

export const BronzeMedal = styled.p`
  i{
    color: #cd7f32;
    font-size: 25px;
    margin: 10px 0 10px;
  }
`

export const RankingContaine = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: space-around;
  padding-top: 50px;
  flex-wrap: wrap;
`;

export const UsersContainer = styled.div`
  width: 400px;
  background-color: rgba(255,255,255, 0.5);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  p{
    text-align: center;
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  h4{
    display: inline;
    background-color: whitesmoke;
    padding: 4px;
    border-radius: 10px;
    &:after{
      content: " ⇒";
    }
  }
  span{
    margin-left: 10px;
  }
`
