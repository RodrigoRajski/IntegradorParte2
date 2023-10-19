import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quisquam repellendus nulla iure voluptates porro excepturi
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contacto</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            aaaaaaaaaaaaaaaaaa
                        </div>
                </div>
                <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 1137761526</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: rajskirodrigo@gmail.com</div>
                    </div>
            </div>
            <div className="col">
                <div className="title">Categorias</div>
                <span className="text">Auriculares</span>
                <span className="text">Reljes Inteligentes</span>
                <span className="text">Parlatnes Bluetooth</span>
                <span className="text">Auriculares Inalambricos</span>
                <span className="text">Home Theatre</span>
                <span className="text">Proyecotres</span>
            </div>
            <div className="col">
                <div className="title">Paginas</div>
                <span className="text">Inicio</span>
                <span className="text">Acerca</span>
                <span className="text">Politicas de Privacidad</span>
                <span className="text">Devoluciones</span>
                <span className="text">Terminos & Condiciones</span>
                <span className="text">Contactanos</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    RRSTORE 2023 CREADO POR RODRIGO RAJSKI. E-COMMERCE.
                </div>
                <img src={Payment} alt=""/>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
