import React from "react";

import { Container } from "@mui/material";
import GameBoard from "./components/GameBoard/gameBoard";


const App = ()=>{
   
    return (
    
        <Container maxWidth="lg">
          <GameBoard/>
        </Container>
      
    );
};

export default App;
