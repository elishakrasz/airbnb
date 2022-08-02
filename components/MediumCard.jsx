import Image from 'next/image'

const MediumCard = ({ img, title}) => {
  return (
    <div>
        <div className='relative h-80 w-80'>
            <Image src={img} layout="fill" />
            <h3>{title}</h3>
        </div>
        Happy
    </div>
  )
}

export default MediumCard