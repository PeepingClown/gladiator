import {useState} from 'react';
import './Mindy.css';
import { Container, Row, Col } from 'react-bootstrap';


export default function GameStartModal(props){  
    const [btnState, setBtnState] = useState(true)

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
    


    return(
        <Container fluid className="game-setup-outer">
            <div className="modal-inner">
                <Container fluid>
                    <p className="mindy-instructions" style={{textAlign:'left'}}>Select Theme</p>
                    <Row style={{marginBottom:'20px'}}>
                        <Col>
                            <button onClick={handleNumberBtn} className="mode-btn" style={btnState?activeBtnStyle:null}>Numbers</button>
                        </Col>
                        <Col>
                            <button onClick={handleIconBtn} className="mode-btn" style={btnState?null:activeBtnStyle}>Icons</button>
                        </Col>
                    </Row>

                    <p className="mindy-instructions" style={{textAlign:'left'}}>Number of Players</p>
                    <Row>
                        <Col>
                            <button className="mode-btn">1</button>
                        </Col>
                        <Col>
                            <button className="mode-btn">2</button>
                        </Col>
                        <Col>
                            <button className="mode-btn">3</button>
                        </Col>
                        <Col>
                            <button className="mode-btn">4</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
        
        
            
    );
        
    
}