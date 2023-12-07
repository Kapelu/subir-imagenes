import Link from 'next/link'
import '@/app/style/Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<small>
				<Link
					className='link'
					href='https://e-comerce-kws.vercel.app/'
					target='_blank'
					rel='noopener noreferrer preload'
					as='https://e-comerce-kws.vercel.app/'
				>
					@kws
				</Link>
                &nbsp;- All Rights Reserved​ 
			</small>
		</footer>
	)
}
