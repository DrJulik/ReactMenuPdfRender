import React from "react";

const Header = () => {
	return (
		<header className="navbar" style={{ background: "rgb(174, 209, 214)" }}>
			<div className="container" style={{ margin: "0.5rem auto" }}>
				<section className="navbar-section">
					<a
						href="/"
						className="navbar-brand mr-2"
						style={{ color: "rgb(59, 67, 81)", fontWeight: "bold" }}
					>
						React Menu Render
					</a>
					<a
						href="/about"
						className="btn btn-link "
						style={{ color: "rgb(59, 67, 81)" }}
					>
						About
					</a>
					<a
						href="/options"
						className="btn btn-link"
						style={{ color: "rgb(59, 67, 81)" }}
					>
						Options
					</a>
				</section>
			</div>
		</header>
	);
};

export default Header;
