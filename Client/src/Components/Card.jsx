import React from 'react';

function Card() {
	return (
		<div className="block rounded-lg bg-white w-80 h-[300px] overflow-hidden">
			<div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
				<img className="rounded-t-lg sm:m-h-40 md:h-40 w-full" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720" alt="" />
				<a href="#!">
					<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
				</a>
			</div>

			<div className="p-2">
				<div className="flex items-center justify-center">
					<div className="text-center">
						<h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800">
							Jhon Doe
						</h5>
						<p className="text-neutral-600">CEO</p>
					</div>
				</div>

				<ul className="flex flex-row items-center justify-center gap-3 mt-4">
					<li><img src="Assets/facebook.svg" alt="" /></li>
					<li><img src="Assets/instagram.svg" alt="" /></li>
					<li><img src="Assets/twitter.svg" alt="" /></li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
