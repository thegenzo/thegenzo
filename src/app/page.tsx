import CardName from "./pages/CardName";
import Quote from "./pages/Quote";
import Spotify from "./pages/Spotify";

export default function Home() {
  return (
    <div className="grid justify-center align-center">
      <div className="flex flex-row">
        <CardName />
        <Quote />
      </div>
      <br />
      <div className="flex flex-row">
        <Spotify embedded={() => (
          <iframe src="https://open.spotify.com/embed/playlist/3SmnuQeMPeVQpD5D7brZvZ?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        )} />

        <Spotify embedded={() => (
          <iframe src="https://open.spotify.com/embed/playlist/4vqBjdFnTtnWzExUQkHkE1?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        )} />
      </div>
    </div>
  );
}