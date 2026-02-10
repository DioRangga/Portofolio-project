import DataImage from "./data";
import { listTools, listProyek } from "./data";
import Navbar from "./components/Navbar"; // Sesuaikan path foldernya
import Footer from "./components/Footer";


function App() {

  return (
  <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden text-white">
      
      {/* 2. LAYER BACKGROUND: Letakkan "Bola Cahaya" di sini (Z-INDEX RENDAH) */}
      {/* --- START LAYER BACKGROUND (Warna Biru/Cyan Terang seperti Gambar) --- */}
{/* Bola Biru Terang di Kiri Atas */}
<div className="absolute top-[-5%] left-[-10%] w-150 h-150 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-pulse" />

{/* Bola Biru Gelap di Tengah Kanan */}
<div className="absolute top-[15%] right-[-10%] w-125 h-125 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

{/* Aksen Biru Terang di Tengah untuk efek "Glow" */}
<div className="absolute top-[10%] left-[20%] w-75 h-75 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />

{/* Bola Slate/Abu-abu di Bawah untuk kedalaman */}
<div className="absolute bottom-[10%] right-[10%] w-150 h-150 rounded-full bg-slate-700/20 blur-[130px] pointer-events-none" />
{/* --- END LAYER BACKGROUND --- */}

      {/* 3. LAYER KONTEN: Pastikan menggunakan relative z-10 agar berada di atas background */}
      <div className="relative min-h-screen z-10 w-full overflow-x-hidden px-5 md:px-20">
<Navbar />




   <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
    <div className="animate__animated animate__fadeInUp animate__delay-2s">
      <div className="flex items-center gap-3 mb-6 bg-zinc-800/30 backdrop-blur-md  w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
        <q>"Behind every technical issue is a person trying to do their best work. I’m here for both."</q>
      </div>
      <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Dio Rangga</h1>
      <p className="text-base/loose mb-6 opacity-50"> 
        Saya saat ini berkerja sebagai IT Support disebuah lembaga pendidikan Internasional hampir 
        5 tahun. Saya mempunyai ketertarikan dalam bidang network engineer dan cybersecurity, terutama 
        pada keamanan sebuah jaringan atau sistem dalam lembaga ketertarikan ini sudah berlangsung 
        lebih dari  tahun.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-cyan-600 p-4 rounded-2xl hover:bg-cyan-500">
            Download CV <i className="ri-download-line ri-lg"></i>
            </a>
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            Lihat Proyek <i className="ri-arrow-down-double-fill ri-lg"></i>
            </a>
        </div>
    </div>
    <img src={DataImage.HeroImage} alt="Hero Image" className="w-full max-w-87.5 mx-auto md:ml-auto md:w-96
    animate__animated animate__backInRight animate__delay-3s" loading="lazy"/>
   </div>


    {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
         data-aos="fade-up" data-aos-duration="3000">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">
          Hi, perkenalkan saya Dio Rangga seorang IT Support dan CyberSecurity untuk keamanan suatu 
          jaringan di sebuah lembaga, saya percaya bahwa keamanan bukan sekadar fitur, melainkan keharusan. 
          Dengan pengalaman di garis depan IT Support, saya memadukan kemampuan pemecahan masalah teknis 
          dengan strategi perlindungan jaringan untuk menciptakan ekosistem digital yang tangguh dan aman 
          bagi seluruh pengguna.    
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  7 <span className="text-cyan-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1" >
                  5 <span className="text-cyan-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

    {/* tools */}
        <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" 
        data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
        Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose 
        opacity-50" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">
          Berikut ini beberapa tools yang biasa saya 
        pakai untuk pembuatan website ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
          grid-cols-1 gap-4 ">

            {listTools.map((tool) => (
              <div className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md
                   hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" 
                   data-aos-duration="3000" data-aos-delay={tool.dad} data-aos-once="true">
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
    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2" 
      data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">Proyek</h1>
      <p className="text-base/loose text-center opacity-50" 
      data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">
        Berikut ini beberapa proyek yang telah saya buat.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
       {listProyek.map((proyek) => (
        <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" 
        data-aos="fade-up" data-aos-duration="3000" data-aos-delay={proyek.dad} data-aos-once="true">
          <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
            <div>
            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
            <p className="text-base/loose mb-4">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" 
                key={index}>{tool}</p>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="#" className="bg-cyan-600 p-3 rounded-lg block border border-zinc-600
               hover:bg-cyan-500">Lihat Website</a>
            </div>
            </div>
        </div>
        ))}
      </div>
      </div>
     {/* Proyek */}
      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="3000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50 "data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">
        Mari terhubung dengan saya.</p>
      <form action="https://formsubmit.co/diogreencounty@gmail.com" method="POST" 
      className="bg-zinc-800 p-5 sm:p-10 w-full max-w-2xl mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
          <label className="font-semibold"> Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukan Nama..." className="border
                border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
          <label className="font-semibold"> Email</label>
          <input type="email" name="email" placeholder="Masukan Email..." className="border
                border-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
          <label className="font-semibold"> Pesan</label>
          <textarea name="pesan" id="pesan"  rows="7" placeholder="Pesan..." className="border
           border-zinc-500 p-2 w-full rounded-md resize-none"></textarea>
          </div>
          <div className="text-center">
          <button type="submit" className="bg-cyan-600 p-3 rounded-lg w-full cursor-pointer border
           border-zinc-600 hover:bg-cyan-500">Kirim Pesan</button>
          </div>
        </div>
      </form>
      </div>
      {/* Kontak */}
<Footer />

    </div> {/* Penutup Layer Konten */}
    </div>

  );
}

export default App
