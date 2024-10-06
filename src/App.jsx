import { Header } from './Components/Header';
import {Post} from './Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './Components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar>
          
        </Sidebar>
        <main>
          <Post
            author="Diego Fernandes"
            content="testee"
          />
          <Post
            author="Kaua Braccio"
            content="NATTANZINHOOOO"
          />
        </main>
      </div>
    </div>
  )
}