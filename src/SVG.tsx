import {Color, Shading, Shape} from "./Card";

interface SVGProps  {
    shape: Shape;
    color: Color;
    shading: Shading;
}

const SVG = ({shape, color, shading} :SVGProps) => {
    const renderDefs = (color: Color) => (
        <defs>
            <pattern stroke={color} id={`pattern-${color}`} patternUnits="userSpaceOnUse" width="5" height="10">
                <line x1="0" y="0" x2="0" y2="10"/>
            </pattern>
        </defs>
    );
    function getFill() :string {
        if(shading === Shading.Empty)
            return 'transparent';
        return color;
    }

    function getFillOpacity(): string {
        return (shading === Shading.Striped ? '80%' : '100%');
    }

    const fill = getFill();
    return (
        <>
            {shape === Shape.Oval &&
                <svg
                    id="oval"
                    width="100"
                    height="200"
                    viewBox="0 0 50 100"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke={color}
                    strokeWidth={2}
                >
                    {renderDefs(color)}
                    <ellipse fill={getFill()} cx="50%" cy="50%" rx="20" ry="26" />
                </svg>
            }
            {shape === Shape.Diamond &&
                <svg
                    id="diamond"
                    width="100"
                    height="200"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="10 0 210 220" xmlSpace="preserve">
                    {renderDefs(color)}
                    <polygon fill={fill} stroke={color} strokeWidth={5} points="111.823,0 16.622,111.823 111.823,223.646 207.025,111.823 "/>
                </svg>
            }
            {shape === Shape.Squiggle &&
                <svg width="100" height="200" viewBox="-20 -40 100 200" xmlns="http://www.w3.org/2000/svg">
                    {renderDefs(color)}
                    <rect width="70" height="120" fill={fill} fillOpacity={getFillOpacity()} stroke={color} strokeWidth={5}/>
                </svg>
            }
        </>
    )
};

    


export default SVG;
