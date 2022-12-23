export enum Count {
    One = 1,
    Two,
    Three
}

export enum Shape {
    Squiggle = "squiggle",
    Oval = "oval",
    Diamond = "diamond",
}

export enum Color {
    Red = "red",
    Purple = "purple",
    Green = "green"
}

export enum Shading {
    Solid = "solid",
    Striped = "striped",
    Empty = "empty"
}

interface Card {
    count: Count;
    shape: Shape;
    color: Color;
    shading: Shading;
}
export default Card;