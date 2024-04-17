"use server"
import AnimeCard from "@/components/AnimeCard";

const MAX_LIMIT = 8;
export const fetchAnime = async (page) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );
  const data = await response.json();

  return data.map((anime, index) => (
    <AnimeCard key={anime.id} index={index} anime={anime} />
  ));
};
