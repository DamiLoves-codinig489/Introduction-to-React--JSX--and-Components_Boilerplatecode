import { useApp } from '../cntext/AppContext';

export default function Navbar() {
    const { theme, setTheme, resetChat } = useApp();
    const isLight = theme === 'light';

    return (
        <nav className="app-navbar">
            <div className="navbar-inner">


               <button className="navbar-brand" onClick={resetChat} title="Start over">
                <i className="bi bi-film" />
                AI Powered CineVerse
               </button>

               <div className="navbar-right">
                <span className="nav-badge">
                    <i className="bi bi-stars" style={{ marginRight: 5 }} />
                    AI Powered
                </span>


                <button
                className="btn-icon"
                title={isLight ? 'Switch to dark mode' :Switch to light mode'}
                    onClick={() => setTheme(isLight ? 'dark' : 'light')}
                    >
                    <i className={`bi ${isLight ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`} />
                    </button>
               </div>

            </div>
        </nav>

    );

}