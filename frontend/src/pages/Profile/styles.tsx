import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ContainerTable = styled.div`
  min-width: 50%;
  padding: 10px;
`

export const TableUser = styled.div`
  h1{
    font-size: 2em;
    color: #fff;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    margin-bottom: 15px;
  }
  table{
    width:100%;
    table-layout: fixed;
  }
  &:nth-child(1){
    background-color: rgba(255,255,255,0.3);
    th{
      padding: 20px 15px;
      text-align: left;
      font-weight: 900;
      font-size: 1.1rem;
      color: #fff;
      text-transform: uppercase;
    }
  }
`;

export const Td = styled.td`
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 900;
  font-size: 1rem;
  color: white;
  border-bottom: solid 2px rgba(255,255,255,0.5);

`

export const TblContent = styled.div`
  height:100px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
  table{
    width:100%;
    table-layout: fixed;
  }
`



export const ButtonsConteiner = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  a{
    margin: 20px auto;
	  border: none;
	  padding: 10px 24px;
	  font-size: 20px;
    position: relative;
    /* background-color: rgb(50, 227, 220); */
    /* border-radius:50px; */
    &::before{
      transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      content: '';
      width: 50%;
      height: 100%;
      background:blueviolet;
      position: absolute;
      top: 0;
      left: 0;
      border-radius:50px;
    }
    & > span{
      color: white;
      mix-blend-mode: screen;
      cursor: pointer;
    }
    &:hover{
		  &::before{
			  background: blueviolet;
		    width: 100%;
	    }
	  }
  }
`;

// export const TextContainer = styled.div`
//   font-size: 1.8em;
//   font-weight: bolder;
//   background-color: white;
//   border-radius: 10px;
//   padding: 10px;
//   & > span{
//     background-color: blueviolet;
//     /* display: inline-block; */
//   }
//   & > span{
//     position: relative;
//     overflow: hidden;
//     display: block;
//     line-height: 1.0;
//     &::after{
//       content: '';
//       position: absolute;
//       top: 0;
//       right: 0;
//       width: 100%;
//       height: 100%;
//       background: #18cfe2;
//       animation: ${altrAfter} 3s cubic-bezier(.77,0,.18,1) forwards;
//       transform: translateX(-101%);
//     }
//     &::before{
//       content: '';
//       position: absolute;
//       top: 0;
//       right: 0;
//       width: 100%;
//       height: 100%;
//       background: #18cfe2;
//       animation: ${altrBefore} 3s cubic-bezier(.77,0,.18,1) forwards;
//       transform: translateX(0);
//     }
//   }
//     & >span:nth-of-type(1)::before,
//     & >span:nth-of-type(1)::after{
//       animation-delay: 1s;
//     }
//     & >span:nth-of-type(2)::before,
//     & >span:nth-of-type(2)::after{
//       animation-delay: 1.5s;
//     }

//     & >span:nth-of-type(3)::before,
//     & >span:nth-of-type(3)::after{
//       animation-delay: 2s;
//     }
//     & >span:nth-of-type(4)::before,
//     & >span:nth-of-type(4)::after{
//       animation-delay: 2.5s;
//     }

//     & > span:nth-of-type(5)::before,
//     & > span:nth-of-type(5)::after{
//       animation-delay: 3s;
//     }
//     & > span:nth-of-type(6)::before,
//     & > span:nth-of-type(6)::after{
//       animation-delay: 3.5s;
//     }
// `

