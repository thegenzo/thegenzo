import Image from "next/image";
import avatar from '../../assets/img/avatar.png'

const CardName = () => {
  return (
		<div className="col-span-1">
			<div className="max-w-xl p-10 mt-10 h-64 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-400 text-center">
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