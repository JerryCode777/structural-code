import { menuItems } from "../../constants"

const MenuItems = () => {
  return (
    <ul className="flex">
      {menuItems.map((item, index) => {
        <li className="" key={index}>
          {item.name}
        </li>
      })}
    </ul>
  )
}

export default MenuItems