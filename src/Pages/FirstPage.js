import { NavLink } from "react-router-dom";
import { Header } from "../components/header/Header"; 
import { Footer } from "../components/footer/Footer"; 
import { Rules } from "../components/rules/Rules"; 
import './FirstPage.css';

export function FirstPage(){ 
    return ( 
        <div> 
            <Header /> 
            <Rules />
            <nav>
                <NavLink to="/memory" className={({isActive}) => (isActive ? 'link link--active':'link')}>Начать игру</NavLink>
            </nav>
            <Footer /> 
        </div> 
    ); 
}