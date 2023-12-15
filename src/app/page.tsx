import CardName from "./pages/CardName";
import Quote from "./pages/Quote";
import Spotify from "./pages/Spotify";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-0 md:gap-2 mb-3 content-center">
        <CardName />
        <Quote />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0 md:gap-2 content-center">
        <Spotify embedded={() => (
            <iframe src="https://open.spotify.com/embed/playlist/3SmnuQeMPeVQpD5D7brZvZ?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          )} 
        />
        <Spotify embedded={() => (
          <iframe src="https://open.spotify.com/embed/playlist/4vqBjdFnTtnWzExUQkHkE1?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          )} 
        />
      </div>
    </div>
  );
}