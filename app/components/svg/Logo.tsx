import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
    return (
        <img
            className={`w-${width} h-${height} logo header`}
            src="./logo-white-t.png"
            alt="Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;
