import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = (props) => {
	console.log(props);

	return (
		<Layout title="Pokemon list">
			<ul>
				<li>Pokemon</li>
				<li>Pokemon</li>
				<li>Pokemon</li>
				<li>Pokemon</li>
				<li>Pokemon</li>
				<li>Pokemon</li>
			</ul>
		</Layout>
	);
};

export default HomePage;
