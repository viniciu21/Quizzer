import styled from 'styled-components';

export const ContainerTable = styled.div`
  min-width: 50vw;
  padding: 40px;
`

export const TableUser = styled.div`
  h1{
    font-size: 2em;
    color: black;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    margin-bottom: 5px;
  }
  table{
    width:100%;
    table-layout: fixed;
  }
  &:nth-child(1){
    background-color: rgba(255,255,255,0.8);
    th{
      padding: 20px 15px;
      text-align: left;
      font-weight: 900;
      font-size: 1.1rem;
      color: black;
      text-transform: uppercase;
    }
  }
  @media (max-width: 548px) {
    h1{
      font-size: 1.5rem;
    }
    &:nth-child(1){
      th{
        font-size: 0.7em;
      }
    }
  }
`;

export const Td = styled.td`
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 900;
  font-size: 1rem;
  color: black;
  border-bottom: solid 2px rgba(255,255,255,0.9);
`;

export const TblContent = styled.div`
  height:100px;
  overflow-x:auto;
  margin-top: 0px;
  /* background-color: black; */
  border: 1px solid rgba(24, 207, 226);
  table{
    width:100%;
    table-layout: fixed;
  }
`;
