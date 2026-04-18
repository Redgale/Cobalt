import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Head from "../../components/head";
import { github, discord } from "../../consts";
import "../../style/home.css";
import { Obfuscated } from "../../components/obfuscate";
import { useLocalAppearance } from "../../settings";

function InternalHome() {
    const mainSearch = React.useRef<HTMLInputElement>(null);
    const [localAppearance, setLocalAppearance] = useLocalAppearance();
    const [theme, setTheme] = React.useState(
        !getComputedStyle(window.document.body)
            .getPropertyValue("--primary")
            .startsWith("linear-gradient(")
            ? "var(--primary)"
            : getComputedStyle(window.document.body)
                  .getPropertyValue("--primary")
                  .split("linear-gradient(")[1]
                  .split(",")[1]
                  .trim()
    );

    // @ts-ignore
    window.changeTheme = (theme) => {
        setLocalAppearance(theme);
    };

    React.useEffect(() => {
        setTheme(
            !getComputedStyle(window.document.body)
                .getPropertyValue("--primary")
                .startsWith("linear-gradient(")
                ? "var(--primary)"
                : getComputedStyle(window.document.body)
                      .getPropertyValue("--primary")
                      .split("linear-gradient(")[1]
                      .split(",")[1]
                      .trim()
        );
    }, [localAppearance]);

    React.useEffect(() => {
        mainSearch?.current?.focus();
    }, []);

    const searchType = (e: any) => {
        if (e.key == "Enter" && e.target.value) {
            // @ts-ignore
            return window.parent.Cobalt.navigate(e.target.value);
        }
    };

    return (
        <>
            <Head defaultTitle="Home" />
            <div className="home">
                <div className="logo">
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
>
    <title>Andesine</title>
    <g 
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={theme} 
        stroke="none"
    >
        <path d="M2333 4132 c-66 -37 -213 -119 -327 -182 l-207 -115 -136 -178 c-74 -98 -133 -180 -131 -182 2 -2 60 0 128 6 68 5 194 14 281 18 86 5 161 11 167 15 12 7 354 677 349 682 -2 2 -57 -27 -124 -64z" />
        <path d="M2474 4018 c-47 -95 -128 -254 -180 -354 -52 -99 -94 -183 -94 -185 0 -7 817 -822 833 -830 11 -7 468 63 565 86 21 5 22 9 22 122 l0 116 -202 395 c-140 273 -214 407 -239 431 -19 20 -80 64 -135 97 -54 34 -182 114 -284 178 -101 64 -188 116 -192 116 -4 0 -47 -78 -94 -172z" />
        <path d="M2000 3410 c-47 -4 -178 -13 -292 -20 l-208 -13 0 -789 0 -789 119 -177 120 -178 348 -27 c191 -15 359 -27 373 -27 22 0 154 95 468 335 l52 39 0 406 0 406 -182 179 c-101 99 -293 289 -428 422 -165 163 -252 243 -265 242 -11 -1 -58 -5 -105 -9z" />
        <path d="M3545 2632 c-11 -3 -121 -21 -245 -41 l-225 -36 -3 -383 -2 -382 22 -10 c22 -8 377 -66 481 -77 l47 -6 0 472 0 471 -27 -1 c-16 -1 -37 -4 -48 -7z" />
        <path d="M2939 1621 c-48 -36 -157 -119 -243 -184 -86 -65 -156 -123 -156 -130 0 -46 32 -395 38 -409 6 -14 60 11 357 168 193 102 366 196 386 209 20 13 84 87 143 164 106 139 126 171 110 171 -5 0 -121 18 -257 40 -137 22 -258 40 -270 39 -12 -1 -61 -31 -108 -68z" />
        <path d="M1866 1312 c21 -15 107 -74 189 -130 83 -57 212 -146 288 -198 l137 -95 0 33 c0 18 -7 105 -15 193 -8 88 -15 165 -15 171 0 6 -63 15 -162 23 -90 7 -207 17 -262 22 -54 5 -121 9 -149 9 l-50 0 39 -28z" />
    </g>
</svg>
                </div>
                <div className="homeOmnibox">
                    <input
                        ref={mainSearch}
                        className="mainSearch"
                        onKeyUp={searchType}
                    />
                    <div className="homeSearchIcon">
                        <SearchIcon style={{ height: "70%", width: "70%" }} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <Obfuscated>Cog Network 2023 | </Obfuscated>
                <a target="_blank" href={discord}>
                    <Obfuscated>Discord</Obfuscated>
                </a>
                <Obfuscated> / </Obfuscated>
                <a target="_blank" href={github}>
                    <Obfuscated>Source</Obfuscated>
                </a>
            </div>
        </>
    );
}

export default InternalHome;
