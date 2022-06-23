import Image from 'next/image'

export default function Book({name, image, buyLink}){
    return (
        <div className='flex flex-col items-center'>
           <h3 className="font-bold">{name}</h3> 
           <Image width={200} height={300} src={image} alt={name}/>
           <div className="mt-2 bg-yellow-400 px-8 py-2 rounded-md text-gray-700 cursor-pointer drop-shadow-lg">
            <a href={buyLink}>Comprar</a>
           </div>
        </div>
    )
}