import React, {useState} from 'react';
import { Collapse, Button } from 'reactstrap';
import {AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';
import {RiTelegramLine} from 'react-icons/ri';
import {FaFacebook} from 'react-icons/fa';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMid, setIsOpenMid] = useState(false);
  const [isOpenLast, setIsOpenLast] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpenMid(!isOpenMid);
  const openLast = () => setIsOpenLast(!isOpenLast);
  return (
    <section className="footer">
        <div className="container desktop-footer">
          <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <a className="number" href="tel:(98) 444-00-00">(98) 444-00-00</a>
            <p>Колл Центр</p>
            <p className="adres">адрес</p>
            <p>
            Uzbekistan, Tashkent sh., Yunusobod t.,
            Amir Temur 108A
            </p>
            <div className="social">
              <h5>Присоединяйтесь к нам</h5>
                <div className="w-100 d-flex">
                <a className="social-media"><AiOutlineInstagram/></a>
                <a className="social-media"><RiTelegramLine/></a>
                <a className="social-media"><FaFacebook/></a>
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h4>Продукты и услуги</h4>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Смартфоны</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Планшет</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Аксессуары</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Умный ключ</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Холодильник</a></li>
            </ul>
            
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h4>О компании</h4>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link pl-0" href="#!">О компании</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Спонсоры</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Новости</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h4>поддержка</h4>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Свяжитесь с нами</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Общая помощь</a></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="container mobile-footer">
              <div className="d-flex w-100"> 
              <div className="my-4"><img className="cal-center" src="./images/call-center.svg"></img></div>
              <div className="my-4 ml-4"> <p className="mb-1">Колл Центр</p>
                  <a className="number mt-0 p-0" href="tel:(98) 444-00-00">(98) 444-00-00</a></div>
              </div>
          <div className="row">
            <div className="col-12 mobile-col py-3">
              <div className="w-100 d-flex justify-content-between align-items-center">
              <h5>Продукты и услуги</h5>
              <Button className="plus-btn" color="light" onClick={toggle}><img className="plus" src="./images/plus.svg"></img></Button>
              </div>
          <Collapse isOpen={isOpen}>
          <ul className="nav">
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Смартфоны</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Планшет</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Аксессуары</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Умный ключ</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Холодильник</a></li>
            </ul>
            </Collapse>
            </div>
            <div className="col-12 mobile-col py-3">
              <div className="w-100 d-flex justify-content-between align-items-center">
              <h5>О компании</h5>
              <Button className="plus-btn" color="light" onClick={open}><img className="plus" src="./images/plus.svg"></img></Button>
              </div>
          <Collapse isOpen={isOpenMid}>
          <ul className="nav">
              <li className="nav-item"><a className="nav-link pl-0" href="#!">О компании</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Спонсоры</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Новости</a></li>
            </ul>
            </Collapse>
            </div>
            <div className="col-12 mobile-col py-3">
              <div className="w-100 d-flex justify-content-between align-items-center">
              <h5>поддержка</h5>
              <Button className="plus-btn" color="light" onClick={openLast}><img className="plus" src="./images/plus.svg"></img></Button>
              </div>
          <Collapse isOpen={isOpenLast}>
          <ul className="nav">
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Свяжитесь с нами</a></li>
              <li className="nav-item"><a className="nav-link pl-0" href="#!">Общая помощь</a></li>
            </ul>
            </Collapse>
            </div>
            <div className="col-12 my-5">
            <div className="w-100 d-flex justify-content-between">
                <a className="social-mobile-media"><AiOutlineInstagram/></a>
                <a className="social-mobile-media"><RiTelegramLine/></a>
                <a className="social-mobile-media"><AiFillGithub/></a>
                <a className="social-mobile-media"><FaFacebook/></a>
                <a className="social-mobile-media"><AiFillLinkedin/></a>
                <a className="social-mobile-media"><AiOutlineTwitter/></a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Footer;