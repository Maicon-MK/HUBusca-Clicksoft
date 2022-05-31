import styled from "styled-components";

export const Section = styled.section`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    border-bottom: 10px solid #33ADAC;
    margin-top: 15px;
    background:#F6F5F9;

    @media(max-width: 430px){
        width:300px;
    }
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
    font-family: 'Raleway', sans-serif;
`

export const ListOfReposContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
    font-family: 'Raleway', sans-serif;
   
    
  #volta{
      text-decoration: none;
      color:  #005554;
      font-family: 'Raleway', sans-serif; 
      margin-left: 10px;
      font-size: 17px; 
  }
  
  #volta:hover{
    font-size:18px;
  }
    
    
`

export const Repo = styled.h2` 
width: 100%;
height: 220px;
background: rgba(0,0,0,.05);
border-radius: 5px;
padding: 10px;
margin-bottom: 10px;
border: 2px solid #33ADAC;
font-family: 'Raleway', sans-serif;
margin-top:10px;
hr{
  margin-top:5px;
}

h2{
  font-size: 15px;
  width: 100%;
  overflow: hidden;
  color: #444;
  font-family: 'Raleway', sans-serif;
}

p{
  font-size: 12px;
  font-weight: 400;
  color: #777;
  width: 100%;
  height: 30px;
  overflow: hidden;
  line-height: 1.3; 
  margin-top: 5px;
}

h3{
  font-size: 13px;
  font-weight: 200;
  color: #7260A2;
  width: 100%;
  height: 15px;
  overflow: hidden;
  line-height: 1.3; 
  margin-top: 5px;
  font-family: 'Raleway', sans-serif;
}
`
export const Button = styled.button`
  display: flex;
  font-size:13px;
  margin-top: 5%;
  margin-left: 35%;
  color:black;
  border:2px #4F388A solid;
  border-radius: 5px;
  background-color:#33adad85;

a{
  text-decoration: none;
  color: rgb(65, 61, 61);
  margin: 6px 2px 3px 8px;
  font-family: 'Raleway', sans-serif;
  
}


`

