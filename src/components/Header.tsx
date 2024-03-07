import { NavLink } from "react-router-dom"
import { ModeToggle } from "./ui/mode-toggle"



function Header() {



  return (
    <>
      <header className="p-4 border-b  top-0 z-50 sticky w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" >
        <div>
          <nav className="flex  w-full text-black  items-center justify-between max-w-[980px] mx-auto">
            <NavLink className="text-2xl text-black font-bold leading-tight tracking-tighter" to='/'>
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
    </>
  )
}

export default Header