import styles from '@/styles/Home.module.css'
import parentToChild from './ParentOne'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <parentToChild />
      </main>
    </>
  )
}
