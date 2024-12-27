import { useEffect, useRef, useState } from "react";


const useHeader = () => {

    const nav_link = [
        { id: "1", path: "/", display: "Home" },
        { id: "2", path: "#", display: "Products" },
        { id: "3", path: "#", display: "Favorites" },
        { id: "4", path: "#", display: "Contact us" },
      ];


      const [sideMenu, setSideMenu] = useState(false);
      const [search, setSearch] = useState(false);

      const searchRef = useRef<HTMLDivElement | null>(null);
      useEffect(() => {
        const handleHideSearch = (e: MouseEvent) => {
          if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
            setSearch(false);
          }
        };
    
        if (search) {
          window.addEventListener("mousedown", handleHideSearch);
        }
    
        return () => {
          window.removeEventListener("mousedown", handleHideSearch);
        };
      }, [search]);








  
  const handleSideMenu = () => setSideMenu((prev) => !prev);

  const handleSearch = () => setSearch((prev) => !prev);

// Header


const headerRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
    const handleHeader = () => {
      // Use window.scrollY or window.pageYOffset for better accuracy
      const scrollPosition = window.scrollY || window.pageYOffset;
  
      if (headerRef.current) {
        if (scrollPosition > 80) {
          headerRef.current.classList.add("header_shrink");
        } else {
          headerRef.current.classList.remove("header_shrink");
        }
      }
    };
  
    handleHeader(); // To handle the initial load
  
    window.addEventListener("scroll", handleHeader);
  
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);


//   handle cart bar

const [cartBar,setCartBar]  = useState(false);
const cartBarRef = useRef<HTMLDivElement | null>(null)

useEffect(()=> {

    const handleCartBar = (e: MouseEvent) => {

        if(cartBarRef.current && !cartBarRef.current.contains(e.target as Node)){
            setCartBar(false)
        }  
    };

if(cartBar){
    window.addEventListener("mousedown", handleCartBar);
}


    return () => {
        window.removeEventListener("mousedown", handleCartBar);
    }

},[cartBar])
  
const toggleCartBar = () => {
    setCartBar(!cartBar)
}

    
  return {
nav_link,
sideMenu,setSideMenu, search,setSearch, 
 handleSideMenu, handleSearch, searchRef, headerRef,
 cartBarRef, toggleCartBar,cartBar

  }
}

export default useHeader
