import React from "react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import ReactFileReader from "react-file-reader";
// Image
import Logo from "../Assets/Logo.png";
import Decoration from "../Assets/Decoration.png";
import FooterImage from "../Assets/Footer.png";

export default function Print(props) {
  const location = useLocation();
  const data = location.state?.data;
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // tanggal converter
  var tanggalLahir = new Date(data.tanggal_lahir_pihak_dua);
  var endDate = new Date(data.end_date);
  let m = tanggalLahir.getMonth();
  let e = endDate.getMonth();
  const mouthName = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const hasilLahir = parseInt(m);
  const bulanLahir = mouthName[hasilLahir];
  const hasilEnd = parseInt(e);
  const bulanEnd = mouthName[hasilEnd];

  var display =
    tanggalLahir.getDate() +
    " " +
    bulanLahir +
    " " +
    tanggalLahir.getFullYear();
  var endDate =
    endDate.getDate() + " " + bulanEnd + " " + endDate.getFullYear();

  console.log(data);

  return (
    <div className="flex justify-center py-10 bg-[#F1F1F1] p-8">
      <div>
        <div className="fixed m-5">
          <button
            className="bg-[#1975FF] px-3 py-2 rounded-[.3rem] text-[.8rem] text-[#FFFFFF]"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
        <div
          ref={componentRef}
          className="bg-[#FFFFFF] overflow-hidden shadow-lg w-[100%]"
        >
          <div className="first text-justify">
            <div className="flex justify-between">
              <div className="flex ml-20 mt-1">
                <img className="w-[8rem] h-[8rem] mt-4" src={Logo} />
                <p className="grid font-semibold text-[2rem] text-[#3A3A3A] w-[20%] leading-9 mt-10">
                  UPANA STUDIO
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[.7rem] m-8">
                  <p>Jl. Tun Abdul Razak, Ruko I-Walk J/10</p>
                  <p>Citraland Celebes, Sulawesi Selatan</p>
                  <p>(+62) 853 4163 0115</p>
                  <p>www.upanastudio.com</p>
                  <p>admin@upanastudio.com</p>
                </div>
              </div>
              <div>
                <img className="w-[13rem]" src={Decoration} />
              </div>
            </div>
            <div className="judul px-28">
              <div className="text-center ">
                <div className="font-extrabold w-[100%] text-[.9rem]">
                  <p className="">SURAT PERJANJIAN</p>
                  <p className="">KERJA LEPAS</p>
                </div>
                <p className="font-bold text-[.9rem] font-bold">
                  No. {data.no_surat}
                </p>
              </div>
              <br />
              <div className="">
                <div className="text-[.9rem]">
                  <p className="">Yang bertanda tangan dibawah ini:</p>
                  <br />
                  <div className="flex ml-10 w-[21rem]">
                    <div>
                      <p>Nama</p>
                      <p>Jabatan</p>
                      <p>Alamat</p>
                    </div>
                    <div className="ml-10 mr-2">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div>
                      <p>{data.nama_pihak_satu}</p>
                      <p>{data.jabatan_pihak_satu}</p>
                      <p>{data.alamat_pihak_satu}</p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="text-[.9rem]">
                  <p className="">
                    Dalam hal ini bertindak atas nama PT. Upana Pelopor Aplikasi
                    Adikarya yang beralamatkan di Jl. Tun Abdul Razak, Ruko
                    I-Walk J/10 Citraland Celebes, Gowa, Sulawesi Selatan yang
                    selanjutnya disebut <b>PIHAK PERTAMA</b>.
                  </p>
                  <br />
                  <div className="flex ml-10 w-[30rem] ">
                    <div>
                      <p>Nama</p>
                      <p>Tempat & Tanggal Lahir</p>
                      <p>Alamat</p>
                      <p>No. KTP</p>
                    </div>
                    <div className="ml-10 mr-2">
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div>
                      <p>{data.nama_pihak_dua}</p>
                      <p>
                        {data.tempat_lahir_pihak_dua}, {display}
                        {/* {data.tempat_lahir_pihak_dua},{new Date(tanggalLahir).toISOString()} */}
                        {/* {data.tanggal_lahir_pihak_dua} */}
                      </p>
                      <p>{data.alamat_pihak_dua}</p>
                      <p>{data.ktp_pihak_dua}</p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="text-[.9rem]">
                  <p className="">
                    Dalam hal ini bertindak atas nama diri pribadi dan
                    selanjutnya disebut <b>PIHAK KEDUA</b>.
                  </p>
                  <br />
                  <p className="">
                    <b>PIHAK PERTAMA</b> dan <b>PIHAK KEDUA</b> secara
                    bersama-sama disebut sebagai <b>PARA PIHAK</b> sepakat untuk
                    menandatangani dan melaksanakan ikatan perjanjian kerja
                    dengan ketentuan dan syarat-syarat sebagai berikut:
                  </p>
                  <br />
                </div>
                <br />

                <div className="text-center">
                  <div className="font-extrabold w-[100%] text-[.9rem]">
                    <p className="">PASAL 1</p>
                    <p className="">KETENTUAN UMUM</p>
                  </div>
                </div>
                <br />
                <div className="text-[.9rem] flex">
                  <p className="mr-2">1. </p>
                  <p className="">
                    <b>PIHAK PERTAMA</b> telah menyatakan persetujuannya untuk
                    menerima
                    <b>PIHAK KEDUA</b> selaku pekerja harian lepas.
                  </p>
                </div>
                <br />
                <div className="flex text-[.7rem] space-x-32 italic">
                  <p className="">Paraf Pihak 1 ______</p>
                  <p className="">Paraf Pihak 2 ______</p>
                </div>
              </div>
            </div>
            <div className="footer mt-[5.5rem]">
              <img src={FooterImage} alt="" />
            </div>
          </div>

          {/* halaman 2 */}
          <div className="text-justify">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex ml-20 mt-1">
                <img className="w-[8rem] h-[8rem] mt-4" src={Logo} />
                <p className="grid font-semibold text-[2rem] text-[#3A3A3A] w-[20%] leading-9 mt-10">
                  UPANA STUDIO
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[.7rem] m-8">
                  <p>Jl. Tun Abdul Razak, Ruko I-Walk J/10</p>
                  <p>Citraland Celebes, Sulawesi Selatan</p>
                  <p>(+62) 853 4163 0115</p>
                  <p>www.upanastudio.com</p>
                  <p>admin@upanastudio.com</p>
                </div>
              </div>
              <div>
                <img className="w-[13rem]" src={Decoration} />
              </div>
            </div>
            {/* isi */}
            <div className="judul px-28">
              <div className="text-[.9rem] flex">
                <p className="mr-2">2. </p>
                <p className="">
                  <b>PIHAK KEDUA</b> menyatakan kesediaannya selaku pekerja
                  harian lepas yang tunduk pada tata tertib, peraturan, dan
                  sistem kerja yang berlaku pada perusahaan <b>PIHAK PERTAMA</b>
                  .
                </p>
              </div>
              <div className="text-[.9rem] flex">
                <p className="mr-2">2. </p>
                <p className="">
                  <b>PARA PIHAK</b> telah sepakat bahwa masa perjanjian ini berlaku
                  sejak ditandatangani sampai dengan kedua belah pihak
                  menyelesaikan kewajiban masing – masing.
                </p>
              </div>
              <br />
              <div className="">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 2</p>
                  <p className="">TUGAS DAN PEKERJAN</p>
                </div>
                <br />
                <p className="">
                  Pekerjaan yang harus dilakukan oleh <b>PIHAK KEDUA</b> selaku
                  pekerja harian lepas (Freelance) adalah {data.tugas_pihak_dua}
                </p>
              </div>
              <br />
              <div className="">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 3</p>
                  <p className="">HASIL PEKERJAAN DAN HAK CIPTA</p>
                </div>
                <br />
                <div className="container">
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">1. </p>
                    <p className="">
                      <b>PIHAK KEDUA</b> wajib melaksanakan dan menyelesaikan
                      pekerjaan sebagaimana dimaksud dalam Pasal 2 dengan
                      rincian pekerjaan sebagai berikut:
                    </p>
                  </div>
                  <div className="ml-20">
                    {data.job_detail.map((item) => (
                      <li>{item}</li>
                    ))}
                  </div>
                </div>
                <div className="container">
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">2. </p>
                    <p className="">
                      Hasil pekerjaan yang diserahkan adalah sebagai berikut:
                    </p>
                  </div>
                  <div className="ml-20">
                    {data.job_result.map((item) => (
                      <li>{item}</li>
                    ))}
                  </div>
                </div>
                <div className="container">
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">3. </p>
                    <p className="">
                      Hak Cipta atas hasil pekerjaan sepenuhnya menjadi milik
                      <b>PIHAK PERTAMA</b>. <b>PIHAK KEDUA</b> dilarang menjual
                      dan membagikan hasil pekerjaan tersebut kepada pihak lain
                      tanpa izin tertulis dari <b>PIHAK PERTAMA</b>.
                    </p>
                  </div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">4. </p>
                    <p className="">
                      Apabila <b>PIHAK KEDUA</b> melakukan pelanggaran hak cipta
                      sebagaimana dijelaskan pada ayat 3 di atas, maka PIHAK
                      PERTAMA dapat memproses secara hukum.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex text-[.7rem] space-x-32 italic">
                <p className="">Paraf Pihak 1 ______</p>
                <p className="">Paraf Pihak 2 ______</p>
              </div>
            </div>
            <div className="footer mt-[6rem]">
              <img src={FooterImage} alt="" />
            </div>
          </div>

          {/* halaman 3 */}
          <div className="text-justify">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex ml-20 mt-1">
                <img className="w-[8rem] h-[8rem] mt-4" src={Logo} />
                <p className="grid font-semibold text-[2rem] text-[#3A3A3A] w-[20%] leading-9 mt-10">
                  UPANA STUDIO
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[.7rem] m-8">
                  <p>Jl. Tun Abdul Razak, Ruko I-Walk J/10</p>
                  <p>Citraland Celebes, Sulawesi Selatan</p>
                  <p>(+62) 853 4163 0115</p>
                  <p>www.upanastudio.com</p>
                  <p>admin@upanastudio.com</p>
                </div>
              </div>
              <div>
                <img className="w-[13rem]" src={Decoration} />
              </div>
            </div>
            {/* isi */}
            <div className="judul px-28">
              <div className="space-y-2">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 4</p>
                  <p className="">JANGKA WAKTU KERJA</p>
                </div>
                <p className="text-[.9rem]">
                  Perjanjian kerja ini berlaku selama [durasi] kerja terhitung
                  sejak tanggal penandatanganan surat perjanjian kerja ini
                  sampai dengan tanggal {endDate}
                </p>
              </div>
              <br />
              <div className="space-y-2">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 5</p>
                  <p className="">PELAKSANAAN TUGAS DAN PEKERJAAN</p>
                </div>
                <div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">1. </p>
                    <p className="">
                      <b>PIHAK KEDUA</b> akan melakukan pekerjaan dengan metode
                      remote working.
                    </p>
                  </div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">2. </p>
                    <p className="">
                      <b>PIHAK PERTAMA</b> akan memberikan pengarahan perihal
                      cara kerja sebelum <b>PIHAK KEDUA</b> memulai
                      pekerjaannya.
                    </p>
                  </div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">3. </p>
                    <p className="">
                      <b>PIHAK KEDUA</b> wajib mengikuti stand up meeting untuk
                      melaporkan perkembangan pekerjaannya setiap hari selasa
                      dan kamis pada pukul 16.00 WITA
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className="space-y-2">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 6</p>
                  <p className="">KONSEKUENSI</p>
                </div>
                <p className="text-[.9rem]">
                  Apabila terjadi keterlambatan dalam penyelesaian dan
                  penyerahan pekerjaan oleh <b>PIHAK KEDUA</b>, maka{" "}
                  <b>PIHAK KEDUA</b> akan dikenakan sanksi berupa penundaan
                  pembayaran hingga pekerjaan selesai.
                </p>
              </div>
              <br />
              <div className="space-y-2">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 7</p>
                  <p className="">PEMBAYARAN</p>
                </div>
                <div className="text-[.9rem] flex">
                  <p className="mr-2">1. </p>
                  <p className="">
                    <b>PIHAK PERTAMA</b> akan membayarkan/memberikan upah
                    sebesar {data.pembayaran} untuk total durasi kontrak
                    sebagaimana tertulis pada Pasal 4 Ayat 1.
                  </p>
                </div>
                <div className="text-[.9rem] flex">
                  <p className="mr-2">2. </p>
                  <p className="">
                    Pembayaran dilakukan dengan tahapan sebagai berikut:
                  </p>
                </div>
                <div className="ml-10 text-[.9rem]">
                  <div className="flex space-x-2">
                    <p>a.</p>
                    <p>
                      Pembayaran dilakukan dengan cara transfer ke rekening
                      [nama bank] dengan nomor rekening [no rek] atas nama [atas
                      nama rekening].
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <p>b.</p>
                    <p>
                      Pembayaran pertama senilai [pembayaran (terbilang)]
                      sebagai down payment dibayarkan saat penandatanganan
                      kontrak.
                    </p>
                  </div>
                </div>
              </div>

              <br />
              <div className="flex text-[.7rem] space-x-32 italic">
                <p className="">Paraf Pihak 1 ______</p>
                <p className="">Paraf Pihak 2 ______</p>
              </div>
            </div>
            <div className="footer mt-[5.5rem]">
              <img src={FooterImage} alt="" />
            </div>
          </div>

          {/* halaman 4 */}
          <div className="text-justify">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex ml-20 mt-1">
                <img className="w-[8rem] h-[8rem] mt-4" src={Logo} />
                <p className="grid font-semibold text-[2rem] text-[#3A3A3A] w-[20%] leading-9 mt-10">
                  UPANA STUDIO
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[.7rem] m-8">
                  <p>Jl. Tun Abdul Razak, Ruko I-Walk J/10</p>
                  <p>Citraland Celebes, Sulawesi Selatan</p>
                  <p>(+62) 853 4163 0115</p>
                  <p>www.upanastudio.com</p>
                  <p>admin@upanastudio.com</p>
                </div>
              </div>
              <div>
                <img className="w-[13rem]" src={Decoration} />
              </div>
            </div>
            {/* isi */}
            <div className="judul px-28">
              <div className="ml-10 text-[.9rem]">
                <div className="flex space-x-2">
                  <p>a.</p>
                  <p>
                    Pembayaran dilakukan dengan cara transfer ke rekening [nama
                    bank] dengan nomor rekening [no rek] atas nama [atas nama
                    rekening].
                  </p>
                </div>
                <div className="flex space-x-2">
                  <p>b.</p>
                  <p>
                    Pembayaran pertama senilai {data.pembayaran} sebagai down
                    payment dibayarkan saat penandatanganan kontrak.
                  </p>
                </div>
              </div>
              <br />

              <div className="space-y-5">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 8</p>
                  <p className="">BERAKHIRNYA PERJANJIAN</p>
                </div>
                <div className="text-[.9rem] flex">
                  <p className="mr-2">1. </p>
                  <p className="">
                    Setiap saat hubungan kerja dapat diakhiri atau
                    dihentikan/dibatalkan jika <b>PIHAK KEDUA</b> melanggar tata
                    tertib, peraturan, dan sistem kerja yang berlaku pada
                    perusahaan <b>PIHAK PERTAMA</b>.
                  </p>
                </div>
                <div className="text-[.9rem] flex">
                  <p className="mr-2">2. </p>
                  <p className="">
                    Pelanggaran yang dimaksud pada ayat 1 diatas, adalah :
                  </p>
                </div>
                <div className="ml-10 text-[.9rem]">
                  <div className="flex space-x-2">
                    <p>a.</p>
                    <p>
                      Pekerjaan tidak sesuai dengan yang ditargetkan atau
                      ditetapkan <b>PIHAK PERTAMA</b> sebelumnya.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <p>b.</p>
                    <p>
                      Tidak memberikan laporan sesuai dengan waktu yang
                      ditetapkan oleh <b>PIHAK PERTAMA</b> kecuali dengan izin
                      tertulis dan dari <b>PIHAK PERTAMA</b>.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <p>c.</p>
                    <p>
                      Melakukan hal – hal lain karena kecerobohan yang
                      mengakibatkan <b>PIHAK PERTAMA</b> mengalami kerugian.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <p>d.</p>
                    <p>
                      Melakukan perusakan dengan sengaja yang menimbulkan
                      kerugian <b>PIHAK PERTAMA</b>.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <p>e.</p>
                    <p>
                      Melakukan tindak penipuan, pencurian, penggelapan, atau
                      tindak – tindak melawan hukum lainnya.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className="space-y-5">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 9</p>
                  <p className="">PENYELESAIAN PERSELISIHAN</p>
                </div>
                <div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">1. </p>
                    <p className="">
                      Apabila terjadi perselisihan antara kedua belah pihak,
                      akan diselesaikan secara musyawarah untuk mencapai
                      mufakat.
                    </p>
                  </div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">2. </p>
                    <p className="">
                      Apabila dengan cara ayat 1 pasal ini tidak tercapai kata
                      sepakat, maka kedua belah pihak sepakat untuk
                      menyelesaikan permasalahan tersebut dilakukan melalui
                      prosedur hukum.
                    </p>
                  </div>
                </div>
              </div>

              <br />
              <div className="flex text-[.7rem] space-x-32 italic">
                <p className="">Paraf Pihak 1 ______</p>
                <p className="">Paraf Pihak 2 ______</p>
              </div>
            </div>
            <div className="footer mt-[5rem]">
              <img src={FooterImage} alt="" />
            </div>
          </div>

          {/* halaman 5 */}
          <div className="text-justify">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex ml-20 mt-1">
                <img className="w-[8rem] h-[8rem] mt-4" src={Logo} />
                <p className="grid font-semibold text-[2rem] text-[#3A3A3A] w-[20%] leading-9 mt-10">
                  UPANA STUDIO
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[.7rem] m-8">
                  <p>Jl. Tun Abdul Razak, Ruko I-Walk J/10</p>
                  <p>Citraland Celebes, Sulawesi Selatan</p>
                  <p>(+62) 853 4163 0115</p>
                  <p>www.upanastudio.com</p>
                  <p>admin@upanastudio.com</p>
                </div>
              </div>
              <div>
                <img className="w-[13rem]" src={Decoration} />
              </div>
            </div>
            {/* isi */}
            <div className="judul px-28">
              <div className="space-y-5">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 10</p>
                  <p className="">KERAHASIAAN INFORMASI</p>
                </div>
                <div className="text-[.9rem] flex">
                  <p>
                    Dalam pelaksanaan kerjasama tersebut, <b>PARA PIHAK</b> sepakat
                    bahwa seluruh informasi baik mengenai hasil-hasil yang
                    dicapai maupun segala sesuatu yang diketahui atau
                    dipertukarkan oleh <b>PARA PIHAK</b> baik pada saat sebelum, selama
                    maupun sesudah proses pelaksanaan kerjasama ini, wajib
                    diperlakukan sebagai rahasia terhitung sejak tanggal
                    berakhirnya Perjanjian Kerjasama ini karena sebab apapun,
                    kecuali ditentukan lain secara tertulis oleh pihak yang
                    memberi informasi.
                  </p>
                </div>
              </div>
              <br />
              <div className="space-y-5">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 11</p>
                  <p className="">KEADAAN MEMAKSA</p>
                </div>
                <div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">1. </p>
                    <p className="">
                      Keadaan memaksa adalah keadaan atau kejadian di luar
                      kekuasaan <b>PIHAK PERTAMA</b> dan <b>PIHAK KEDUA</b> yang
                      mengakibatkan terhentinya atau tertundanya pelaksanaan
                      perjanjian, yaitu bencana alam (banjir, gempa bumi, angin,
                      topan, petir) serta huru-hara, kebakaran dan hal-hal lain
                      di luar kekuasaan kedua belah pihak yang oleh pejabat
                      berwenang dinyatakan sebagai keadaan memaksa.
                    </p>
                  </div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">2. </p>
                    <p className="">
                      <b>PIHAK KEDUA</b> dapat meminta pertimbangan dari{" "}
                      <b>PIHAK PERTAMA</b>
                      secara tertulis selambat-lambatnya dalam waktu 1 (satu)
                      hari sejak terjadinya keadaan memaksa dan dilampirkan
                      bukti-bukti yang sah untuk menyelesaikan pekerjaan akibat
                      keadaan memaksa berdasarkan penyelidikan yang seksama.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className="space-y-5">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 12</p>
                  <p className="">LAIN-LAIN</p>
                </div>
                <div className="text-[.9rem] flex">
                  <p>
                    Hal-hal lain yang ada hubungannya dengan perjanjian ini dan
                    belum cukup diatur dalam pasal-pasal dari surat perjanjian
                    ini akan ditentukan lebih lanjut oleh kedua belah pihak
                    secara musyawarah dan mufakat dan dituangkan dalam Surat
                    Perjanjian Tambahan/Addendum dan merupakan bagian yang tidak
                    terpisahkan dari Perjanjian ini.
                  </p>
                </div>
              </div>
              <br />
              <div className="flex text-[.7rem] space-x-32 italic">
                <p className="">Paraf Pihak 1 ______</p>
                <p className="">Paraf Pihak 2 ______</p>
              </div>
            </div>
            <div className="footer mt-[7.5rem]">
              <img src={FooterImage} alt="" />
            </div>
          </div>

          {/* halaman 6 */}
          <div className="text-justify">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex ml-20 mt-1">
                <img className="w-[8rem] h-[8rem] mt-4" src={Logo} />
                <p className="grid font-semibold text-[2rem] text-[#3A3A3A] w-[20%] leading-9 mt-10">
                  UPANA STUDIO
                </p>
              </div>
              <div className="flex mt-2">
                <div className="text-[.7rem] m-8">
                  <p>Jl. Tun Abdul Razak, Ruko I-Walk J/10</p>
                  <p>Citraland Celebes, Sulawesi Selatan</p>
                  <p>(+62) 853 4163 0115</p>
                  <p>www.upanastudio.com</p>
                  <p>admin@upanastudio.com</p>
                </div>
              </div>
              <div>
                <img className="w-[13rem]" src={Decoration} />
              </div>
            </div>
            {/* isi */}
            <div className="judul px-28">
              <div className="space-y-5">
                <div className="text-center font-extrabold w-[100%] text-[.9rem]">
                  <p className="">PASAL 13</p>
                  <p className="">PENUTUP</p>
                </div>
                <div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">1. </p>
                    <p className="">
                      Surat Perjanjian ini dinyatakan sah dan mengikat kedua
                      belah pihak dan mulai berlaku setelah ditandatangani oleh
                      kedua belah pihak.
                    </p>
                  </div>
                  <div className="text-[.9rem] flex">
                    <p className="mr-2">2. </p>
                    <p className="">
                      Surat Perjanjian ini dibuat 2 (dua) rangkap masing-masing
                      bermaterai cukup dan mempunyai kekuatan hukum yang sama.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className="space-y-5">
                <div className="text-center w-[100%] text-[.9rem]">
                  <p className="">PIHAK PERTAMA,</p>
                </div>
                <div className="flex text-[.9rem] space-x-10">
                  <div className="left">Tanggal: [tanggal dibuat]</div>
                  <div className="right">
                    <div className="flex space-x-2">
                      <div>Tanda Tangan</div>
                      <div>:</div>
                      <div></div>
                    </div>
                    <div className="flex space-x-2 bg-gray-300">
                      <div>Nama</div>
                      <div>:</div>
                      <div>{data.nama_pihak_satu}</div>
                    </div>
                    <div className="flex space-x-2">
                      <div>Jabatan</div>
                      <div>:</div>
                      <div>{data.jabatan_pihak_satu}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-5 mt-20">
                <div className="text-center w-[100%] text-[.9rem]">
                  <p className="">PIHAK KEDUA,</p>
                </div>
                <div className="flex text-[.9rem] space-x-10">
                  <div className="left">Tanggal: [tanggal dibuat]</div>
                  <div className="right">
                    <div className="flex space-x-2">
                      <div>Tanda Tangan</div>
                      <div>:</div>
                      <div></div>
                    </div>
                    <div className="flex space-x-2 bg-gray-300">
                      <div>Nama</div>
                      <div>:</div>
                      <div>{data.nama_pihak_dua}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 text-[.9rem]">
                <p>Lampiran:</p>
                <div className="flex ml-5 space-x-5">
                <p>-</p>
                <p>Fotocopy KTP / NPWP / SIM</p>
                </div>
              </div>
              <br />
              <div className="flex text-[.7rem] space-x-32 italic">
                <p className="">Paraf Pihak 1 ______</p>
                <p className="">Paraf Pihak 2 ______</p>
              </div>
            </div>
            <div className="footer mt-20">
              <img src={FooterImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
