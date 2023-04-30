import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import RightCard from '../Shared/RightNav/RightCard';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                        <RightCard></RightCard>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;