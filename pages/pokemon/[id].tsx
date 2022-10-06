import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	return (
		<Layout title="A pokemon">
			<h1>{pokemon.name}</h1>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

	return {
		paths: pokemons151.map((id) => ({
			params: { id },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { id } = ctx.params as { id: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

	return {
		props: {
			pokemon: data,
		},
	};
};

export default PokemonPage;
