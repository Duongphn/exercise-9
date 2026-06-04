import Description from './Description'
import Image from './Image'
import Title from './Title'

function SimpleCard({ item }) {
  return (
    <article className="simple-card" aria-label="Exercise 5 Simple Card">
      <header className="hero-section" id="home">
        <Image url={item.imageUrl} />
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content-section">
        <section id="about">
          <Title text={item.title} />
          <Description text={item.description} />
        </section>

        <section id="contact">
          <Title text="Contact" />
          <Description text="For any inquiries, please contact us at example@example.com." />
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2023 Website. All rights reserved.</p>
      </footer>
    </article>
  )
}

export default SimpleCard
