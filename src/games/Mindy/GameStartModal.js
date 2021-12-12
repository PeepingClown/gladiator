import {useState} from 'react';
import './Mindy.css';
import { Container, Row, Col } from 'react-bootstrap';


export default function GameStartModal(props){  
    
    //States
    const [btnState, setBtnState] = useState(true)
    const [playerNum, setPlayerNum] = useState({
        onePlayer:true,
        twoPlayer:false,
        threePlayer:false,
        fourPlayer:false
    })
    const [gridBtn, setGridBtn]=useState(true)

    //Objects
    const activeBtnStyle = {
        backgroundColor:'#0F2C67'
    }
    

    //Functions
    const handleNumberBtn = ()=> {
        setBtnState(true)
    }
    const handleIconBtn = ()=>{
        setBtnState(false)
    }
    
    const oneButtonHandle = ()=>{
        setPlayerNum({
            onePlayer:true,
            twoPlayer:false,
            threePlayer:false,
            fourPlayer:false
        })
    }
    const twoButtonHandle = ()=>{
        setPlayerNum({
            onePlayer:false,
            twoPlayer:true,
            threePlayer:false,
            fourPlayer:false
        })
    }
    const threeButtonHandle = ()=>{
        setPlayerNum({
            onePlayer:false,
            twoPlayer:false,
            threePlayer:true,
            fourPlayer:false
        })
    }
    const fourButtonHandle = ()=>{
        setPlayerNum({
            onePlayer:false,
            twoPlayer:false,
            threePlayer:false,
            fourPlayer:true
        })
    }

    const grid4ButtonHandle = ()=>{
        setGridBtn(true)
    }
    const grid6ButtonHandle = ()=>{
        setGridBtn(false)
    }

    return(
        <Container fluid className="game-setup-outer">
            <div className="modal-inner">
                <Container fluid>
                    <p className="mindy-instructions" style={{textAlign:'left'}}>Select Theme</p>
                    <Row style={{marginBottom:'30px'}}>
                        <Col>
                            <button onClick={handleNumberBtn} className="btn-basic mode-btn" style={btnState?activeBtnStyle:null}>Numbers</button>
                        </Col>
                        <Col>
                            <button onClick={handleIconBtn} className="btn-basic mode-btn" style={btnState?null:activeBtnStyle}>Icons</button>
                        </Col>
                    </Row>

                    <p className="mindy-instructions" style={{textAlign:'left'}}>Number of Players</p>
                    <Row style={{marginBottom:'30px'}}>
                        <Col>
                            <button onClick={oneButtonHandle} className="btn-basic mode-btn" style={playerNum.onePlayer?activeBtnStyle:null}>1</button>
                        </Col>
                        <Col>
                            <button onClick={twoButtonHandle} className="btn-basic mode-btn" style={playerNum.twoPlayer?activeBtnStyle:null}>2</button>
                        </Col>
                        <Col>
                            <button onClick={threeButtonHandle} className="btn-basic mode-btn" style={playerNum.threePlayer?activeBtnStyle:null}>3</button>
                        </Col>
                        <Col>
                            <button onClick={fourButtonHandle} className="btn-basic mode-btn" style={playerNum.fourPlayer?activeBtnStyle:null}>4</button>
                        </Col>
                    </Row>

                    <p className="mindy-instructions" style={{textAlign:'left'}}>Grid Size</p>
                    <Row style={{marginBottom:'30px'}}>
                        <Col>
                            <button onClick={grid4ButtonHandle} className="btn-basic mode-btn" style={gridBtn?activeBtnStyle:null}>4x4</button>
                        </Col>
                        <Col>
                            <button onClick={grid6ButtonHandle} className="btn-basic mode-btn" style={gridBtn?null:activeBtnStyle}>6x6</button>
                        </Col>
                    </Row>
                    <Row style={{marginBottom:'10px'}}>
                        <Col><button className="btn-basic start-game-btn">Start Game</button></Col>
                    </Row>
                </Container>
            </div>
        </Container>
        
        
            
    );
        
    
}