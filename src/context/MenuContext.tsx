import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useState,
} from "react";

interface MenuContextState {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  // useOutsideAlerter(ref: MutableRefObject<null>): void;
}

export const MenuContext = createContext({} as MenuContextState);

export const MenuContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // function useOutsideAlerter(ref: MutableRefObject<HTMLElement>) {
  //  useEffect(() => {
  //    /**
  //     * Alert if clicked on outside of element
  //     */
  //    function handleClickOutside(event: MouseEvent) {
  //      if (ref.current && !ref.current.contains(event.target)) {
  //        setIsOpen(false);
  //      }
  //    }
  //    // Bind the event listener
  //    document.body.addEventListener("click", handleClickOutside);
  //    return () => {
  //      // Unbind the event listener on clean up
  //      document.body.removeEventListener("click", handleClickOutside);
  //    };
  //  }, [ref]);
  //}

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
