import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import HomeContainer from '../Components/Containers/Home/index'
export default function Home() {
  return (
    <main dir='rtl' className='flex flex-col items-center'>
     <HomeContainer />

    </main>
  )
}
