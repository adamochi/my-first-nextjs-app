import styles from "../styles/Home.module.css";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

export default function home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    // router.push(`/movies/${id}`);
    router.push(
      `/movies/${title}/${id}`
      // {
      //   pathname: `/movies/${id}`,
      //   query: {
      //     title,
      //   },
      // },
      // `/movies/${id}`
      // we are going to hide the query like this ^^
    );
  };
  // const [movies, setMovies] = useState();
  // useEffect(() => {
  // (async () => {
  //   const { results } = await (await fetch(`/api/movies`)).json();
  //   setMovies(results);
  // })();
  // }, []);
  const loading = "loading. . .";
  return (
    <div className={styles.main}>
      <Seo title={"Home"} />
      <h1>home</h1>
      {!results && <h1>{loading}</h1>}
      {results &&
        results.map((movie) => (
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => onClick(movie.id, movie.original_title)}
            key={movie.id}
          >
            <Link
              href={{
                pathname: `/movies/${movie.original_title}/${movie.id}`,
                // query: {
                //   title: movie.original_title,
                // },
              }}
              // as={`/movies/${movie.id}`}
            >
              <h3>{movie.original_title}</h3>
            </Link>
            <p>{movie.overview}</p>
            <img
              style={{
                maxHeight: "200px",
                borderRadius: "10px",
              }}
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            ></img>
          </div>
        ))}
    </div>
  );
}
/* 
// This will only be server side. not on the client
export async function getServerSideProps() {
  const { results } = await (await fetch("/api/movies")).json();
  // needs a props key.
  return {
    props: {
      results,
    },
  };
}
// you can send props from the server
 */

// Server side rendering? is it better to show loading? or just wait for everything before showing the page,. ,.
// ONLY ABSOLUTE URLs WORK ON THE SERVER SIDE
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
// pros and cons,. I prefer loading, but search engines love this0!
