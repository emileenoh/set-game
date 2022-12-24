import {Count, Shading, Shape, Color} from "./Card";
interface SVGProps  {
    shape: Shape;
    color: Color;
    shading: Shading;
}

const SVG = ({shape, color, shading} :SVGProps) => {
    const pattern = (
        <defs>
            <pattern id="pattern"
                     width="8" height="10"
                     patternUnits="userSpaceOnUse"
                     patternTransform="rotate(45 50 50)">
                <line stroke-width="4px" y2="10"/>
            </pattern>
        </defs>);
    function getFill() :string {
        if(shading == Shading.Empty)
            return 'transparent';
        if(shading == Shading.Solid)
            return color;
        return 'use(#pattern)';
    };

    const fill = getFill();
    return (
        <>
            {shape === Shape.Oval &&

                <svg id="oval" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <ellipse stroke={color} strokeWidth={5} fill={fill} cx="100" cy="50" rx="80" ry="40" />
                </svg>
            }
            {shape === Shape.Diamond &&
                <svg id="diamond" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 223.646 223.646" xmlSpace="preserve">
                    <polygon fill={fill} stroke={color} strokeWidth={5} points="111.823,0 16.622,111.823 111.823,223.646 207.025,111.823 "/>
                </svg>
            }
            {shape === Shape.Squiggle &&
                <svg id="heart" xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 612 792">
                    <path fill={fill} stroke={color} strokeWidth={5} d="M611.721,288.299c-2.258-42.176-20.114-81.782-50.287-111.524c-30.557-30.119-70.43-46.708-112.27-46.708
                c-62.267,0-107.396,49.233-131.641,75.684c-3.743,4.085-8.13,8.87-11.183,11.79c-2.444-2.529-5.756-6.3-8.803-9.768
                c-22.142-25.222-68.223-77.704-134.688-77.704c-41.84,0-81.711,16.588-112.268,46.708C20.408,206.517,2.547,246.121,0.29,288.299
                c-2.248,42.107,8.521,78.746,34.92,118.803c20.888,31.701,75.961,93.605,133.927,150.543c29.856,29.326,57.336,54.18,79.466,71.873
                c35.936,28.729,49.7,32.413,57.674,32.413c7.476,0,21.614-3.352,57.895-32.332c22.079-17.637,49.463-42.451,79.194-71.76
                c57.445-56.63,112.318-118.617,133.443-150.743C594.576,380.072,614.6,342.151,611.721,288.299z"/>
                </svg>
            }
        </>
    )
};

    


export default SVG;
