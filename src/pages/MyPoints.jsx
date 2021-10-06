import React from 'react';
import Sidebar from '../components/Sidebar';
import ButtonGoBack from '../components/ButtonGoBack';
import { Row, Col, Card } from 'reactstrap';

function MyPoints() {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
            <Row
                    style={{
                        height: '50vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Col md={6} lg={4}>
                        <Card body style={{
                            borderRadius: '10px'
                        }}>
                            <h1>Meus pontos</h1>
                            <ButtonGoBack/>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default MyPoints