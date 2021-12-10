import {useState} from 'react';
import './Mindy.css';
import GameStartModal from './GameStartModal';


export default function Mindy(){
    
    return(
       <div className="mindy-main-screen">
           <h2 className="game-name">mindy</h2>
           <GameStartModal/>
       </div> 
        
    )
}