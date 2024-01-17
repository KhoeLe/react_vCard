
function Header() {
  return (
    <header className="p-4 mb-10">
      <div>
        <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <a className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">🎉
            <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
          </a>
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">QR Code Generator (VCard File)</h1>
        </section>
      </div>
    </header>
  )
}

export default Header