import { Header } from "../components/header/Header"; 
import Grid from "./../components/grid/Grid"; 
import { Footer } from "../components/footer/Footer"; 
import useGame from "../components/useGame";
import { images } from "../data";
import Modal from "../components/modalGame";
import './GamePage.css';
import { NavLink } from "react-router-dom";  // Добавьте эту строку

export function GamePage() {
    const { finishedItems, handleReset, stepsCount, checkItems, isWin } = useGame(images);

    return (
        <section className="game container">
            <Header /> 
            <div className="count-steps-overlay">Всего ходов: {stepsCount}</div>
            <Grid 
                images={images}
                finishedItems={finishedItems}
                checkItems={checkItems}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">Игра окончена</h3>
                    <p className="modal-description">Вы собрали все пары за {stepsCount} шагов</p>
                    <button className="button modal-button" type="button" onClick={handleReset}>Новая игра</button>
                </Modal>
            )}
            <Footer />
            <div className="back-to-home-overlay">
                <NavLink to="/" className="back-to-home-button">← На главную</NavLink>
            </div>
        </section>
    );
}
