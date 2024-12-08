import { NavLink } from "react-router-dom";
import { Header } from "../components/header/Header"; 
import { Footer } from "../components/footer/Footer"; 
import './FirstPage.css';

export function FirstPage(){ 
    return ( 
        <div> 
            <Header /> 
            {/* <p className="txt">По очереди ищите пары одинаковых карточек, переворачивая их по две штуки за раз.</p>
            <p className="txt">Кто находит пару, зарабатывает очко - и может перевернуть еще одну пару.</p>
            <p className="txt">Кто находит больше пар - выигрывает!</p> */}
            <nav>
                <NavLink to="/memory" className={({isActive}) => (isActive ? 'link link--active':'link')}>Начать игру</NavLink>
            </nav>
            <Footer /> 
        </div> 
    ); 
}