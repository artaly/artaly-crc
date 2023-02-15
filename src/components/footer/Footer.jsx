import "./footer.css";

const Footer = () => {

    return (
        <footer class="footer">
            <div class="footer__copyright">
                <div class="top">
                <span>Designed &amp; Design inspiration by</span>
                </div>
                <div class="bottom">
                <span>
                    <a
                    href="https://github.com/bchiang7"
                    target="_blank"
                    class="underline-link">Brittany Chiang</a>
                </span>
                <span>&nbsp;2018</span>
                </div>
            </div>
            <div class="footer__links">
                <a href="mailto:villalonalycahgmail.com" target="_blank" title="EMAIL">
                <span class="text">EMAIL</span>
                </a>
                <a href="https://www.linkedin.com/in/alycahvillalon/" target="_blank" title="LINKEDIN">
                <span class="text">LINKEDIN</span>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" title="GITHUB">
                <span class="text">GITHUB</span>
                </a>
            </div>    
        </footer>

    )
}

export default Footer;
