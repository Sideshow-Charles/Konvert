import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="header__container">
            <Link href="/" passHref><div className="logo">KONVERT</div></Link>
        </header>
    )
}

export default Header;