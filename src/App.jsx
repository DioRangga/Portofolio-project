import DataImage from "./data";
import { listTools } from "./data";

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
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Dio Rangga seorang IT Support dan CyberSecurity untuk keamanan suatu 
          jaringan di sebuah lembaga, saya percaya bahwa keamanan bukan sekadar fitur, melainkan keharusan. 
          Dengan pengalaman di garis depan IT Support, saya memadukan kemampuan pemecahan masalah teknis 
          dengan strategi perlindungan jaringan untuk menciptakan ekosistem digital yang tangguh dan aman 
          bagi seluruh pengguna.    
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  7 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1" >
                  5 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-fulltext-base/loose 
        opacity-50">Berikut ini beberapa tools yang biasa saya 
        pakai untuk pembuatan website ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
          grid-cols-1 gap-4 ">

            {listTools.map((tool) => (
              <div className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md
                   hover:bg-zinc-800 group key={tool.id}>">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 
                   group-hover:bg-zinc-900" />
              <div>
                <h4 className="font-bold"> {tool.nama}</h4>
                <p className=" opacity-50">{tool.ket}</p>
              </div>
               </div>
            ))}
          </div>
        </div>
      </div> 
    {/* tentang */}
    </>
  );
}

export default App
