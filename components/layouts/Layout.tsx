import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
	children: JSX.Element;
	title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || "PokemonApp"}</title>
				<meta name="author" content="Nicolas Vazquez" />
				<meta name="description" content={`Information about the pokemon ${title}`} />
				<meta name="keywords" content={`${title}, pokemon, pokedex`} />
			</Head>

			<Navbar />

			<main style={{ padding: "0px 20px" }}>{children}</main>
		</>
	);
};
