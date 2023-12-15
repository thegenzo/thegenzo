const Quote = () => {
	return (
		<div className="col-span-1 md:col-span-3 lg:grid-cols-3">
			<div className="max-w-3xl h-auto md:h-64 p-10 mt-10 rounded-lg bg-gradient-to-b from-orange-300 to-yellow-400 border">
				<p>
					Fell in love with technology since I was in middle school. Currently working as a professional Software Engineer at University in my hometown.
					Build my startup <span className="font-semibold">itsonata</span> for my glorious purpose: 
				</p>
				<p className="italic font-bold mt-4 text-center">
					&quot;To create a better world with technology&quot;
				</p>
				<p></p>
			</div>
		</div>
	)
}

export default Quote