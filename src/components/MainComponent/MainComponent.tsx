import './MainComponent.scss'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png';
import main_img from '../Assets/hero_image.png';
const MainComponent: React.FC = () => {
    return (<>
        <div className="main">
            <div className="main-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="main-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt='' />
                    </div>
                    <p>collection</p>
                    <p>collections for everyone</p>
                </div>
                <div className="main-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt='' />
                </div>
            </div>
            <div className="main-right">
                <img src={main_img} alt='' />
            </div>
        </div>
    </>)
}

export default MainComponent