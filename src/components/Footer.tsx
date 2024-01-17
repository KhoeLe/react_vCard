function Footer() {
  const currentYear = new Date().getFullYear()
  return (

    <footer className="border-t flex flex-col-reverse">
      <div className="mx-auto py-10">
        <p className="text-center text-xs">Copyright © {currentYear} VCard LTD , Inc. All rights reserved.</p>
      </div>

      <div className="container flex overflow-hidden justify-center space-x-16 group">
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 1" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 7" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 9" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 10" />
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 1" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 2" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 7" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 9" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" className="max-w-none" alt="Image 10" />
        </div>
      </div>
    </footer>



  )
}

export default Footer 