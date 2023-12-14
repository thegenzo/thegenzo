interface SpotifyProps {
	embedded: () => JSX.Element
}

const Spotify: React.FC<SpotifyProps> = ({ embedded }) => {
  return (
    <div className="basis-1/2">
      <div className="max-w-2xl h-75 rounded-lg sm:mb-6">
        {embedded()}
      </div>
    </div>
  )
}

export default Spotify