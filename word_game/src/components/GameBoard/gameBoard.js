

import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

//import useStyles from "./style";

const randomWords = require('random-words');



const words= randomWords({exactly: 5, minLength:5, maxlength:5,});
 




const GameBoard = ()=>{
  let arrayOfArrays = [];

  //const classes = useStyles();

const words2 = ()=>{

words.forEach(element => {
  arrayOfArrays.push([...element]);
  return arrayOfArrays 
});
console.log(arrayOfArrays)

};
 
    return (
      <Container /*className={classes.container}*/>
        <Typography>{words2()}</Typography>
      <table className="MyClassName">
      <thead>
        { [...arrayOfArrays].map((word,index)=>{
         return <tr key={index}>{word.map((letter,index)=>{
          return <td key={index}>{letter}</td>
         })}</tr>
        })}
        
      </thead>
      
    </table>
        
    </Container>
    );
};

export default GameBoard;

