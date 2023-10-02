// import '../login.css'
import headerCSS from './Header.module.css';

const Header = () => {
    return (
        <>
            <div className={headerCSS.header}>
                <div className={headerCSS.img1}>
                    <img id="blobby-1" src="./CSS/nipponlogo2.png" alt="Blobby" />
                </div>

                <nav>
                    <a href="">Home</a>

                    <a href="">Return</a>
                </nav>
            </div>
        </>
    );
}
 
export default Header;