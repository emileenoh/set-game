import Card from "./Card";

export function isASet(cards: Card[]): boolean {
    // TODO is there a way to enforce the length of this array with typing?
    // TODO handle errors (wrong number of cards)

    // Pseudocode:
    // It is a set if...
    // For each attribute [color, count, shape, shading]
    // could be a set if:
        // All three cards share the same value or
        // All three cards have a different value

    // All attributes could be a set = it is a set

    // let allCountAttributes = [cards[0].count, cards[1].count, cards[2].count];
    let allAttributesMatch = cards[0].count === cards[1].count && cards[0].count === cards[2].count;
    let allAttributesAreDifferent = cards[0].count !== cards[1].count && cards[0].count !== cards[2].count && cards[1].count !== cards[2].count;

    return (allAttributesMatch || allAttributesAreDifferent);

    // TODO next time: refactor this function to be agnostic of the length of the array.
    //  Write two helper functions (all elements unique? all elements different?) in a leetcode way
}