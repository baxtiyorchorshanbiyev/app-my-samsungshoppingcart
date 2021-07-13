import React, {useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
const Navs = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div className="container">
        <h3 className="title">DO WHAT YOU CANNOT</h3>
        <div className="row for__reverse">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <Nav tabs>
        <NavItem>
          <NavLink
            onClick={() => { toggle('1'); }}
          >
            <span className="mr-3">01</span>The First Look 2021
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => { toggle('2'); }}
          >
            <span className="mr-3">02</span>Путешествуйте в Париж с творениями парижских художников
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => { toggle('3'); }}
          >
            <span className="mr-3">03</span>Раскройте силу сна
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => { toggle('4'); }}
          >
            <span className="mr-3">04</span>Спасибо, что вы самые лучшие!
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => { toggle('5'); }}
          >
            <span className="mr-3">05</span>Снимай нашугалактику #withGalaxy
          </NavLink>
        </NavItem>
      </Nav>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col lg="12">
              <div className="w-100 navs-left"><img className="w-100 h-100" src="./images/paris.png" alt="" /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col lg="12">
              <div className="navs-left"> <img className="w-100 h-100" src="./images/paris2.jpg" alt="" /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col lg="12">
              <div className="navs-left"><img className="w-100 h-100" src="./images/tovar2.png" alt="" /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col lg="12">
              <div className="navs-left"><img className="w-100 h-100" src="./images/tovar1.png" alt="" /></div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col lg="12">
              <div className="navs-left"><img className="w-100 h-100" src="./images/tovar3.png" alt="" /></div>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
          </div>
        </div>
    </div>
  );
};

export default Navs;