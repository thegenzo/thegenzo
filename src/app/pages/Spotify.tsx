interface SpotifyProps {
	embedded: () => JSX.Element
}

const Spotify: React.FC<SpotifyProps> = ({ embedded }) => {
  return (
    <div className="basis-1/2">
      <div className="max-w-2xl h-75 mx-3 rounded-lg">
        {embedded()}
      </div>
    </div>
  )
}

export default Spotify