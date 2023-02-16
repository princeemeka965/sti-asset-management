import DesktopHeader from "./desktopHeader";

export default function Header({page}) {
    return (
        <>
          <DesktopHeader classProps="lg:flex sm:hidden" app={page} />  
        </>
    )
};