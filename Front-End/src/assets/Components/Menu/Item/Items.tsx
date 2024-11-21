import { useEffect } from "react";
import items from "./itemList"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./items.css"

interface Props {
  categoryId : number
 }
const Items = ({categoryId} : Props) => {
  useEffect(() => {
    // Fetch new data based on the categoryId whenever it changes
    console.log(`Fetching data for category ID: ${categoryId}`);
    // Fetch and update logic here...
  }, [categoryId]); // Dependency array ensures this runs whenever categoryId changes

  const filteredItems = items.filter((item) => item.categoryId === categoryId);

  return (
    <div
    className="w-[90%] h-full bg-black text-yellow-400
    flex flex-col items-center justify-center mt-2 rounded-lg">
      <ul className="flex flex-col items-center justify-center w-full h-full p-5">
      <TransitionGroup component={null}>
          {filteredItems.map((item) => (
            <CSSTransition
              key={item.id}
              timeout={300} // Duration of the animation
              classNames="fade"
            >
              <li className="flex flex-col items-center justify-center space-y-2 border-b border-yellow-400 pb-10 border-dashed mb-10">
                <div className="w-full items-center flex flex-row justify-between">
                  <p>{item.price + " " + "T"}</p>
                  <p>{item.name}</p>
                </div>
                <div className="w-full flex items-end text-right">
                  <p>
                    {item.description}
                  </p>
                </div>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  )
}

export default Items