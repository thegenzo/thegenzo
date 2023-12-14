import Image from "next/image";
import avatar from '../../assets/img/avatar.png'

const CardName = () => {
  return (
		<div className="basis-1/3">
			<div className="max-w-2xl p-10 mt-10 h-64 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-500 text-center">
				<p className="mb-2">This is</p>
				<div className="bg-white rounded-lg w-20 h-20 mt-3 ml-auto mr-auto">
					<a href="https://github.com/thegenzo" target="_blank">
						<Image 
							src={avatar}
							width={100}
							height={100}
							alt='avatar'
							style={{ padding: 10 }}
						/>
					</a>
				</div>

				<h3 className="mt-5 font-bold">TheGenzo</h3>
				<p>on Next.js</p>
			</div>
		</div>
  )
}

export default CardName