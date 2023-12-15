interface SpotifyProps {
	embedded: () => JSX.Element
}

const Spotify: React.FC<SpotifyProps> = ({ embedded }) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-2">
      <div className="w-auto h-75 rounded-lg my-3">
        {embedded()}
      </div>
    </div>
  )
}

export default Spotify