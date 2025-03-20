import s from './MainNavigation.module.css'
import { NavLink } from './NavLink'

interface NavListProps {
  onClick: () => void
}

export function NavList({ onClick }: NavListProps) {
  return (
    <nav className={s.nav}>
      <ul className={s.navigation}>
        <li>
          <NavLink
            href="/"
            className={s.link}
            activeClassName={s.active}
            onClick={onClick}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/ui-kit"
            className={s.link}
            activeClassName={s.active}
            onClick={onClick}
          >
            Компоненты
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/typography"
            className={s.link}
            activeClassName={s.active}
            onClick={onClick}
            prefetch={true}
          >
            Типографика
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/shop"
            className={s.link}
            activeClassName={s.active}
            onClick={onClick}
          >
            Магазин
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
