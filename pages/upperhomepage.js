import styles from "../styles/Home.module.css";
import Cart from "./cart";
function Homepage() {
  return (
    <>
    <div className={styles.heading}>
    <h1 className={styles.headingtitle}>Waffle Walkers</h1>
    </div>
    <div>
    <header style={{ padding: '20px' }}>
          <h1>Food Delivery</h1>
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
    <main style={{ padding: '20px' }}>
      <h2>Welcome to Food Delivery</h2>
      <p>We offer a variety of delicious meals from top restaurants delivered straight to your door.</p>
    </main>
    <h1>Waffle Menu</h1>
    <Cart></Cart>
    <footer style={{ marginLeft : '45%' }}>
        <p>Copyright © 2023 Waffle Walkers</p>
    </footer>
    </div>
    </>

  );
}
export default Homepage