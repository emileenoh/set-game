import Card from './Card';

const SetCard = ({count, shape, color, shading}: Card) => {
    return (
        <>
            <div>This is the component</div>
            <div>{count}</div>
            <div>{shape}</div>
            <div>{color}</div>
            <div>{shading}</div>
        </>
    );
}

export default SetCard;