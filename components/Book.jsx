import Image from 'next/image'

export default function Book({name, image, buyLink, store = 'na Amazon'}){
    return (
        <div className='flex flex-col items-center m-4'>
           <Image width={200} height={300} src={image} alt={name}/>
           <div className="mt-2 bg-yellow-400 px-8 py-2 rounded-md text-gray-700 cursor-pointer drop-shadow-lg">
            <a target="_blank" href={buyLink} rel="noreferrer">Comprar {store}</a>
           </div>
        </div>
    )
}