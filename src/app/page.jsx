'use client'
import Image from 'next/image'
import {useState} from 'react'

export default function Home() {
	const [file, setFile] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)
	return (
		<>
			<h1>Subir Imágen</h1>
			<form
				onSubmit={async (e) => {
					e.preventDefault()

					const formData = new FormData()
					formData.append('image', file)
					const response = await fetch('/api/upload', {
						method: 'POST',
						body: formData,
						/* 
                        header: {
                            'contemt-Type': 'multipart/form-data' 
                        }
                        */
					})
					const data = await response.json()
					console.log(data)
					setImageUrl(data.url)
				}}
			>
				<input
					type='file'
					onChange={(e) => {
						setFile(e.target.files[0])
					}}
				/>
				<button>Enviar</button>
			</form>
			{imageUrl && (<Image src={imageUrl} alt=''></Image>)}
		</>
	)
}
