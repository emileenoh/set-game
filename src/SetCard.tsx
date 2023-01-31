import Card from './Card';
import {Count, Shading, Shape, Color} from "./Card";
import './SetCard.css';
import SVG from './SVG';
const SetCard = ({count, shape, color, shading}: Card) => {
    return (
        <div className="set-card">
            {[...Array(count)].map((e,i) =>
                <div key={i}>
                    <SVG shape={shape} color={color} shading={shading}/>
                </div>
            )}
        </div>
    );
}

export default SetCard;