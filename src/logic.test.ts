import {isASet} from "./logic";
import Card, {Color, Count, Shading, Shape} from "./Card";

describe('isASet', () => {
    it('returns false when a set is not selected', () => {
        const cards:Card[] = [
            {
                count: Count.One,
                shape: Shape.Diamond,
                color: Color.Red,
                shading: Shading.Striped
            },
            {
                count: Count.Two,
                shape: Shape.Oval,
                color: Color.Green,
                shading: Shading.Striped
            },
            {
                count: Count.One, //this makes it not a set
                shape: Shape.Oval,
                color: Color.Red,
                shading: Shading.Striped
            }
        ];
        expect(isASet(cards)).toBe(false);
    });
    describe('when a single property (count) is different and all other properties are the same', () => {
        it('returns true', () => {
            const cards:Card[] = [
                {
                    count: Count.One,
                    shape: Shape.Diamond,
                    color: Color.Red,
                    shading: Shading.Striped
                },
                {
                    count: Count.Two,
                    shape: Shape.Diamond,
                    color: Color.Red,
                    shading: Shading.Striped
                },
                {
                    count: Count.Three,
                    shape: Shape.Diamond,
                    color: Color.Red,
                    shading: Shading.Striped
                }
            ];
            expect(isASet(cards)).toBe(true);
        });
    });
})
