import {NextResponse} from 'next/server'
import {writeFile} from 'fs/promises'
import path from 'path'

import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
	cloud_name: 'kapelu',
	api_key: '566637683242475',
	api_secret: 'fDTDRvPP_w4fj25MHWPyCT8Ef14',
})

export async function POST(request) {
	const data = await request.formData()
	const image = data.get('image')

	if (!image) {
		return NextResponse.json('No se ha subido ninguna imagen', {
			status: 400,
		})
	}

	const bytes = await image.arrayBuffer()
	const buffer = Buffer.from(bytes)

	// Guardar en un archivo
	//const filePath = path.join(process.cwd(), 'public', image.name)
	//console.log(filePath)
	//await writeFile(filePath, buffer)

    //const response = await cloudinary.uploader.upload(filePath)
    //console.log(response)

    //Subir a Cloudinary sin Guardar en 'public'
    const result = await new Promise((resolve, reject)=>{
        cloudinary.uploader.upload_stream({},(err, result)=>{
            if (err){
                reject(err)
            }
            resolve(result)
        }).end(buffer)
    })

	return NextResponse.json('Imágen Subida')
}
