import DataImage from "./data";


function App() {

  return (
    <>
   <div className="hero grid grid-cols-2">
    <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
        <q>Kode Yang. Indah Lahir Dari Ketekunan😜 </q>
      </div>
      <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Dio Rangga</h1>
      <p>Saya saat ini berkerja sebagai IT Support disebuah lembaga pendidikan Internasional hampir 
        5 tahun. Saya mempunyai ketertarikan dalam bidang network engineer dan cybersecurity,terutama 
        pada keamanan sebuah jaringan atau sistem dalam lembaga ketertarikan ini sudah berlangsung 
        lebih dari satu tahun.</p>
    </div>
    <img src={DataImage.HeroImage} alt="Hero Image" className='w-125' />
   </div>
    </>
  );
}

export default App
