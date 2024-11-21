import  {useState} from 'react';
import Categories from './Category/Categories'
import Items from './Item/Items'

const MenuPage = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const handleClicke = (categoryIdNumber : number): void => {
    console.log(categoryIdNumber)
    setSelectedCategoryId(categoryIdNumber)
  }
  return (
    <div className='w-full flex justify-center items-center flex-col'>
        <div className="w-full">
            <Categories handleClicke = {handleClicke} />
        </div>
        <div className="w-full flex items-center justify-center">
            <Items categoryId ={selectedCategoryId} />
        </div>
        
    </div>
  )
}

export default MenuPage