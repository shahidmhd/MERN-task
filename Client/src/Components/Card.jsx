import React from 'react'

function Card() {
  return (


<div class="block rounded-lg bg-white w-75">
	<div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
		<img class="rounded-lg  sm:m-h-40 md:h-40 w-full" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51701996/original/ac2eabbe-da86-4646-a7d7-f6fe48c083b8.jpeg?im_w=720"
                                    alt="" />
		<a href="#!">
			<div
				class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
			</div>
		</a>
	</div>

	<div class="p-2">
		<div className='flex items-center justify-center'>
			<h5 class="mb-2 text-sm font-bold leading-tight text-neutral-800">
				Jhon Doe
			</h5>
			
		</div>
		<p class="mb-2 ml-20 text-sm text-neutral-600 ">
			CEO
		</p>

		<ul className='flex flex-row items-center justify-center gap-2'>
            <li><img src="Assets/facebook.svg" alt="" srcset="" /></li>
            <li><img src="Assets/instagram.svg" alt="" srcset="" /></li>
            <li><img src="Assets/twitter.svg" alt="" srcset="" /></li>
        </ul>
	</div>
</div>
  )
}

export default Card