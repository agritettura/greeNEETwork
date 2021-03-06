import React from "react";
import Link from "next/link";

import styles from "./Menu.module.sass";

const NavMenu = ({ navMenu, refs }) => {
  return (
    <nav className={styles.MainMenu} ref={refs.navMenu}>
      {navMenu.map((item, idx) => (
        <Link
          key={"Navitem_" + idx}
          href={item.link}
          as={item.link}
          prefetch={false}
        >
          <a
            aria-label={item.name}
            className={styles.MainItem}
            ref={refs.navMenuItems[idx]}
          >
            {item.name}
            <span>{item.description}</span>
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
