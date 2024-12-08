import { Header } from "../components/header/Header"; 
import Grid  from "./../components/grid/Grid"; 
import { Footer } from "../components/footer/Footer"; 
import useGame from "../components/useGame";
import { images } from "../data";
import Modal from "../components/modalGame";
import './GamePage.css';

export function GamePage(){
    const { finishedItems, handleReset, stepsCount, checkItems, isWin } = useGame(images);
    return (
        <section className="game container">
        <Header /> 
        <div className="count-steps">{stepsCount}</div>
            <Grid 
            images={images}
            finishedItems={finishedItems}
            checkItems={checkItems}
            />
            {isWin && (
                <Modal>
                    <h3 className="modal-caption">Победа!</h3>
                    <p className="modal-description">Вы собрали все пары за {stepsCount} шагов</p>
                    <button className="button modal-button" type="button" onClick={handleReset}>Новая игра</button>
                </Modal>
            )}
            <Footer />
        </section>
    );
}