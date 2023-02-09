import styles from "../styles/Home.module.css";
import Cart from "./cart";
import Link from 'next/link';
function Homepage() {
  return (
    <>
    <div>
    <h1 className={styles.headingtitle}>Waffle Walkers</h1>
    </div>
    <div>
    <header style={{ padding: '20px' }}>
          <nav>
            <ul>
              <li><Link href="/ContactUs">Menu</Link></li>
              <li><a href="#abo">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
    <main style={{ padding: '20px', fontSize: '22px' }}>
      <h2>Welcome to Waffle Walkers</h2>
      <p>Welcome to Waffle Walkers, the premier destination for all things waffles in Vellore! Conveniently located near the famous Vellore Institute of Technology, we're a homegrown company that's passionate about delivering the freshest, most delicious waffles to our customers. 
        With more than 20 types of waffles on our menu, there's something for everyone, whether you prefer your waffles sweet or savory, classic or inventive. Come visit us to enjoy a hot, fresh waffle on the go, or have it delivered right to your door. 
        Your support of our small business is what keeps us going, and we look forward to serving you soon!</p>
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