import Head from 'next/head'
import Image from 'next/image'
import GSSNavbar from '../components/GSSNavbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Gokulam School Notations</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <GSSNavbar/>
    <div>Notes</div>
  </div> )
}
