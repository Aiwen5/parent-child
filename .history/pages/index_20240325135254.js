import styles from '@/styles/Home.module.css'
import parentToChild from './ParentOne'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <parentToChild />
      </main>
    </>
  )
}
