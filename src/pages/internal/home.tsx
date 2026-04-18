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
    viewBox="0 0 256 256"
    preserveAspectRatio="xMidYMid meet"
>
    <title>Andesine</title>
    <g 
        transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
        fill={theme} 
        stroke="none"
    >
        <path d="M1052 2002 c-150 -85 -154 -89 -217 -172 -36 -46 -65 -86 -65 -88 0 -5 237 7 268 14 17 3 40 39 102 164 44 88 80 162 80 165 0 11 -20 1 -168 -83z" />
        <path d="M1190 1913 l-92 -176 119 -119 c65 -66 161 -159 213 -208 l95 -88 110 19 c198 33 175 22 175 87 0 53 -8 72 -108 265 l-107 207 -150 95 c-82 52 -153 95 -157 95 -3 0 -48 -79 -98 -177z" />
        <path d="M1015 1705 c-5 -2 -67 -7 -137 -10 l-128 -7 0 -395 0 -395 61 -87 60 -88 77 -6 c42 -4 127 -9 187 -13 l110 -6 123 92 122 92 0 203 0 202 -215 212 c-197 193 -227 217 -260 206z" />
        <path d="M1658 1297 l-118 -20 0 -193 0 -193 33 -5 c17 -3 73 -13 122 -21 50 -8 96 -15 103 -15 9 0 12 54 12 235 0 218 -1 235 -17 234 -10 -1 -71 -11 -135 -22z" />
        <path d="M1387 748 l-118 -91 6 -61 c11 -113 16 -146 24 -146 5 0 89 42 187 94 178 93 179 95 241 172 34 43 60 80 58 82 -7 8 -217 42 -250 41 -22 0 -61 -24 -148 -91z" />
        <path d="M1060 570 c201 -141 182 -136 175 -43 -10 129 -3 119 -97 127 -46 4 -114 9 -153 12 l-70 6 145 -102z" />
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
                <Obfuscated>RedGale inc. 2026 | </Obfuscated>
                <a target="_blank" href={discord}>
                    <Obfuscated></Obfuscated>
                </a>
                <Obfuscated></Obfuscated>
                <a target="_blank" href={github}>
                    <Obfuscated>Source</Obfuscated>
                </a>
            </div>
        </>
    );
}

export default InternalHome;
