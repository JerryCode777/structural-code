import { menuItems } from "../../constants"

const MenuItems = () => {
  return (
    <ul className="flex flex-col">
      {menuItems.map((item, index) => {
        <li className="" key={index}>
          <a href="">{item.name}</a>
        </li>
      })}
    </ul>
  )
}

export default MenuItems