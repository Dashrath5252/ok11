import Image from 'next/image'

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <div className="app-icon">
              <Image
                src="/ok11icon.webp"
                alt="OK11 Game Official App Icon"
                width={50}
                height={50}
                priority
              />
            </div>
            <div>
              <div className="logo-text">ok11 GAME</div>
              <div className="tagline">Entertainment Gaming Platform</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
