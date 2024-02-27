import { Logo } from "@/components/Logo";
import config from "@/config.json";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { IconButton } from "@/components/IconButton";

const categoriesMenuItems = [
  {
    label: "Sex shop",
    subcategories: [
      {
        label: "Vibrador",
        link: "https://google.com",
      },
      {
        label: "Sugador clitoriano",
        link: "https://google.com",
      },
    ],
  },
  {
    label: "Sugadores",
    link: "https://youtube.com",
  },
  {
    label: "Vibradores",
    subcategories: [
      {
        label: "Vibradores mais vendidos",
        link: "https://google.com",
      },
      {
        label: "Vibradores bullet",
        link: "https://google.com",
      },
    ],
  },
];

const iconButtonSize = "24px";

export function AppBar() {
  return (
    <header>
      <div className="flex justify-between bg-black text-white h-[90px] px-2">
        <AppBarSearch />
        <AppBarLogo />
        <AppBarCart />
      </div>
      <CategoriesMenuDesktop />
    </header>
  );
}

function AppBarSearch() {
  return (
    <div className="flex md:order-2">
      <IconButton onClick={() => {}} className="text-primary">
        <GiHamburgerMenu size={iconButtonSize} />
      </IconButton>
      <IconButton onClick={() => {}} className="text-primary">
        <BsFillSearchHeartFill size={iconButtonSize} />
      </IconButton>
    </div>
  );
}

function AppBarLogo() {
  return (
    <div className="flex items-center gap-2 text-xl md:order-1">
      <Logo size={iconButtonSize} /> {config.name}
    </div>
  );
}

function AppBarCart() {
  return (
    <div className="flex md:order-3">
      <IconButton onClick={() => {}} className="text-primary">
        <FaShoppingCart size={iconButtonSize} />
      </IconButton>
    </div>
  );
}

function CategoriesMenuDesktop() {
  return (
    <nav className="hidden md:flex bg-secondary p-2">
      {categoriesMenuItems.map((category, index) => (
        <SubcategoryMenuItem category={category} key={index} />
      ))}
    </nav>
  );
}

type SubcategoryMenuItemProps = {
  category: {
    label: string;
    link?: string;
    subcategories?: {
      label: string;
      link: string;
    }[];
  };
};

function SubcategoryMenuItem({ category }: SubcategoryMenuItemProps) {
  if (category.link !== undefined) {
    return (
      <div>
        <a href={category.link}>{category.label}</a>
      </div>
    );
  } else {
    return (
      <div>
        <button className="app-menu-subcategories-button">
          {category.label}
        </button>
        <ul className="appbar-menu-subcategories-items">
          {category.subcategories?.map((subcategory, index) => (
            <li key={index}>
              <a href={subcategory.link}>{subcategory.label}</a>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .appbar-menu-subcategories-items {
            display: none;
          }

          .app-menu-subcategories-button:hover
            + .appbar-menu-subcategories-items {
            display: block;
          }
        `}</style>
      </div>
    );
  }
}
