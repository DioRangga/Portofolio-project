import DataImage from "./data";


function App() {

  return (
    <>
   <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
    <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
        <q>Something To Jump 😜 </q>
      </div>
      <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Dio Rangga</h1>
      <p className="text-base/loose mb-6 opacity-50"> 
        Saya saat ini berkerja sebagai IT Support disebuah lembaga pendidikan Internasional hampir 
        5 tahun. Saya mempunyai ketertarikan dalam bidang network engineer dan cybersecurity, terutama 
        pada keamanan sebuah jaringan atau sistem dalam lembaga ketertarikan ini sudah berlangsung 
        lebih dari  tahun.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
            Download CV <i className="ri-download-line ri-lg"></i>
            </a>
          <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            Lihat Proyek <i className="ri-arrow-down-double-fill ri-lg"></i>
            </a>
        </div>
    </div>
    <img src={DataImage.HeroImage} alt="Hero Image" className="w-125 md:ml-auto" />
   </div>
    {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div>
          <p>
          Hi, perkenalkan saya Dio Rangga seorang IT Support dan CyberSecurity untuk keamanan suatu 
          jaringan di sebuah lembaga, saya percaya bahwa keamanan bukan sekadar fitur, melainkan keharusan. 
          Dengan pengalaman di garis depan IT Support, saya memadukan kemampuan pemecahan masalah teknis 
          dengan strategi perlindungan jaringan untuk menciptakan ekosistem digital yang tangguh dan aman 
          bagi seluruh pengguna.    
          </p>
          <div>
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md" />
            <div>
              <div>
                <h1>
                  45 <span></span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1>
                  4 <span></span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    {/* tentang */}
    </>
  );
}

export default App
