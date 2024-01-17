import { NavLink } from "react-router-dom"
import { ModeToggle } from "./ui/mode-toggle"
import Section from "./Section"



function Header() {


  return (
    <>
      <header className="p-4 mb-10 border-b  top-0 z-50" >
        <div>
          <nav className="flex  w-full   items-center justify-between max-w-[980px] mx-auto">
            <NavLink className="text-2xl font-bold leading-tight tracking-tighter" to='/'>
              QR Code Generator
            </NavLink>
            <div className="flex items-center gap-4">
              <NavLink className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium" to='/generate-list'>
                🎉  Generate List
                <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
              </NavLink>
              <ModeToggle />
            </div>
          </nav>
        </div>


      </header>


      <Section   />
    </>
  )
}

export default Header