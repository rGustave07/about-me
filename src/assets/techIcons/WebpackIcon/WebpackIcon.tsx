import React from "react";
import LogoProps from "../LogoProps";

const WebpackLogo = ({
	colorMode = "currentColor",
	className = "text-gray-400",
	height,
	width,
}: LogoProps) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 -14 256 256"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			preserveAspectRatio="xMidYMid"
		>
			<defs><radialGradient fx="50%" fy="50%" id="a"><stop stop-color="#93B4E7" offset="0%"/><stop stop-color="#B9D1F8" offset="59.273%"/><stop stop-color="#9CB6E0" offset="100%"/></radialGradient></defs><path d="M128.032.456L.298 74.203v147.495l127.734 73.748 127.735-73.748V74.203L128.032.456z" fill="url(#a)"/><path d="M128.034 75.263L64.69 111.834v73.144l63.344 36.572 63.344-36.572v-73.144l-63.344-36.571z" fill="#6F95DB"/><path d="M128 0L0 74.25l128 69.693 128-69.238L128 0zM128 153.509L0 221.38l128 73.793 127.544-74.249L128 153.51z" fill="#FFF" fill-opacity=".1"/>
			{/* <g>
				<path fill="#fff" d="M600 0l530.3 300v600L600 1200 69.7 900V300z"/>
				<path fill="#8ed6fb" d="M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z"/>
				<path fill="#1c78c0" d="m580.8 889.7l-257-141.3v-280l257 148.4v272.9m36.7 0l257-141.3v-280l-257 148.4v272.9m-276.3-453.7l258-141.9 258 141.9-258 149-258-149"/>
			</g> */}
		</svg>
	);
};

export default WebpackLogo;
