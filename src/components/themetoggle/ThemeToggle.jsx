import { useEffect,useState} from "react";
import { FaRegMoon } from "react-icons/fa";
import { PiSunLight } from "react-icons/pi";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");
    useEffect(()=> {
        const savedTheme = localStorage.getItem("theme");
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme) {
            setTheme(savedTheme);
        }else if(prefersDarkScheme) {
                setTheme('dark');
            }
        
    },[]);


    useEffect(()=> {
        const html = document.documentElement;
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return(
        <div>
            <button
            onClick={toggleTheme}
            arai-label = {`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="scroll-auto absolute transition-colors duration-300 ease-in-out top-0 sm:right-4  "
            >
            {
             theme === "light" ? (<span className="text-3xl"><PiSunLight /></span>) : (<span className="text-2xl"><FaRegMoon /></span>)
            }
            </button>
        </div>
    )

}
export default ThemeToggle;