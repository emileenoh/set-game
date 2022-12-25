import {Color, Shading, Shape} from "./Card";

interface SVGProps  {
    shape: Shape;
    color: Color;
    shading: Shading;
}

const SVG = ({shape, color, shading} :SVGProps) => {
    // const renderDefs = (color: Color) => (
    //     <defs>
    //         <pattern stroke={color} id={`pattern-${color}`} patternUnits="userSpaceOnUse" width="5" height="10">
    //             <line x1="0" y="0" x2="0" y2="10"/>
    //         </pattern>
    //     </defs>
    // );
    function getFill() :string {
        return (shading === Shading.Empty ? 'transparent' : color);
    }

    function getFillOpacity(): string {
        return (shading === Shading.Striped ? '50%' : '100%');
    }

    const fill = getFill();
    return (
        <>
            {shape === Shape.Oval &&
                <svg id="oval" width="100" height="200" viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg" stroke={color} strokeWidth={2}>
                    <ellipse fill={getFill()} fillOpacity={getFillOpacity()} cx="50%" cy="50%" rx="20" ry="30" />
                </svg>
            }
            {shape === Shape.Diamond &&
                <svg id="diamond" width="100" height="200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="10 0 210 220" xmlSpace="preserve">
                    <polygon fill={getFill()} stroke={color} strokeWidth={10} fillOpacity={getFillOpacity()} points="111.823,0 16.622,111.823 111.823,223.646 207.025,111.823 "/>
                </svg>
            }
            {shape === Shape.Rectangle &&
                <svg width="100" height="200" viewBox="-20 -40 100 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="120" fill={getFill()} fillOpacity={getFillOpacity()} stroke={color} strokeWidth={5}/>
                </svg>
            }
        </>
    )
};

    


export default SVG;
