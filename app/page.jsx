import Image from 'next/image'
//import styles from './page.module.css'
import Inicio from './pages/inicio'

export default function Home() {
	return (
		<>
			<section id='inicio'>
                <Inicio />
			</section>
            <section id='testimonios'></section>
            <section id='contacto'></section>
		</>
	)
}
