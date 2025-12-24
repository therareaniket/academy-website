"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hideHeader, setHideHeader] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const headerRef = useRef<HTMLDivElement | null>(null);

	const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;

			// Stop hide/show when mega menu is open
			if (isMenuOpen) { setHideHeader(false); return; }

			const navbarHeight = headerRef.current?.offsetHeight || 0;
			// const triggerPoint = window.innerHeight - navbarHeight;
			const triggerPoint = 50;

			if (currentScroll <= triggerPoint) { setHideHeader(false); setLastScrollY(currentScroll); return;}
			if (currentScroll > lastScrollY) { setHideHeader(true); } else { setHideHeader(false); }

			setLastScrollY(currentScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY, isMenuOpen]);

	return (
		<>
			<header className={`site-header ${hideHeader ? 'header-hide' : ''}`} ref={headerRef}>
        		<div className="container">
            		<div className="header-wrapper">
						<Link href="/" className="header-logo-link">
							<Image src="/images/header/DhatuAcademy-logo.svg" alt="header-logo" width={272} height={34}></Image>
						</Link>

						<div className={`header-megamenu ${isMenuOpen ? 'active' : ''}`}>
							<span className="menu-grdnt-bg"></span>

							<div className="hamburger">
								<div className="mega-menu-trigger" onClick={toggleMenu} role="button">
									<span className="menu-lines menu-line-1"></span>
									<span className="menu-lines menu-line-2"></span>
									<span className="menu-lines menu-line-3"></span>
								</div>

								<div className="mega-menu-content">
									<ul>
										<li>
											<Link href="#" className="menu-link h3">Home</Link>
										</li>
										<li>
											<Link href="#" className="menu-link h3">About</Link>
										</li>
										<li>
											<Link href="#" className="menu-link h3">Solutions</Link>
										</li>
										<li>
											<Link href="#" className="menu-link h3">Courses</Link>
										</li>
										<li>
											<Link href="#" className="menu-link h3">Resources</Link>
										</li>
										<li>
											<Link href="#" className="menu-link h3">Contact</Link>
										</li>
									</ul>
								</div>
							</div>
            			</div>
            		</div>
          		</div>
        	</header>
      	</>
    );
}