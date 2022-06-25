import Frontend from "../components/Frontend";

export default function Home() {
  const metadata = {
    title: 'Selamat Datang',
    description: 'Website paling keren',
    robots: 'index, follow'
  }
  return (
    <Frontend metadata={metadata}>      
      Halaman depan
    </Frontend>       
  )
}
