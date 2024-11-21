
interface Props {
    id: number;
    name: string;
    image: string;
}

const Category = ({id , name , image} : Props) => {
  return (
    <div key={id} className='flex flex-col items-center justify-center p-3 '>
        <img src={image} className='w-16' alt="" />
        <p className="font-mono font-bold">{name}</p>
    </div>
  )
}

export default Category