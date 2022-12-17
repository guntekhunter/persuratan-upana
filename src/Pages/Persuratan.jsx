import React from "react";
import NavBar from "../Component/UiComponent/NavBar";
import Card from "../Component/UiComponent/Card";
import Text from "../Component/UiComponent/Text/TextColor";
import Drop from "../Component/UiComponent/Inputs/Drop";
import Inputs from "../Component/UiComponent/Inputs/Inputs";
import TextArea from "../Component/UiComponent/Inputs/textArea";
import ButtonAdd from "../Component/UiComponent/Buttons/ButtonAdd";
import ButtonUpload from "../Component/UiComponent/Inputs/Upload";
import ButtonP from "../Component/UiComponent/Buttons/ButtonP";
import ButtonDate from "../Component/UiComponent/Buttons/ButtonDate";
import ButtonDrag from "../Component/UiComponent/Buttons/ButtonDrag";
import { useState } from "react";
import ButtonInput from "../Component/UiComponent/Buttons/ButtonInput";
import { getPost, createPost } from "../Post/Post";
import { useEffect } from "react";
import { list } from "postcss";

export default function Persuratan() {
  // const data = [{ title: "ommaleka" }, { title: "ulala" }, { title: "uhhuy" }];
  const [dataDetail, setDataDetail] = useState([]);
  const [dataResult, setDataResult] = useState([]);
  const [dataPayment, setDataPayment] = useState([]);
  const [fileDetail, setFileDetail] = useState([]);
  const [active, setActive] = useState(false);
  const [detail, setDetail] = useState();
  const [tujuan, setTujuan] = useState();
  const [item, setItem] = useState({
    tujuan: "",
    no_surat: "",
    nama_pihak_satu: "",
    jabatan_pihak_satu: "",
    alamat_pihak_satu: "",
    nama_pihak_dua: "",
    ktp_pihak_dua: "",
    tempat_lahir_pihak_dua: "",
    tanggal_lahir_pihak_dua: "",
    alamat_pihak_dua: "",
    tugas_pihak_dua: "",
    job_detail:"",
    job_detail:"astogel",
    job_result:"",
    job_result:"ulala",
    payment_detail:"",
    payment_detail:"handulillah",
    start_date: "",
    end_date: "",
    pembayaran: "",
    ttd_pihak_satu: "",
    ttd_pihak_dua: "",

  });
  const [rincian, setRincian] = useState(false);
  const [hasil, setHasil] = useState(false);
  const [pembayaran, setPembayaran] = useState(false);

  // date
  const dateChangeHandler = (date, name) => {
    const nameDate = name;
    setItem((prev) => {
      return { ...prev, [nameDate]: date };
    });
    if(date.length !== ""){
      setActive(true);
    }
  };

  // daftar hasil
  const handleAddHasil = () => {
    setHasil(true);
  };

  const handleDeleteHasil = () => {
    setHasil(false);
  };
  
  // bentuk hasil pekerjaan
  const handleAddRincian = () => {
    setRincian(true);
  };
  
  const handleDeleteRincian = () => {
    setRincian(false);
  };

  const handleAddPebayaran = () => {
    setPembayaran(true);
  };
  
  const handleDeletePembayaran = () => {
    setPembayaran(false);
  };
  
  const fetchData = async () => {
    await getPost()
    .then((res) => {
      setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // handle semua inputan
  const handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
    if(value.length !== ""){
      setActive(true);
    }
  };

  // insert data to array
  const addDetail = () => {
    setDataDetail([...dataDetail, detail]);
    setItem((prev) => {
      return { ...prev, job_detail: dataDetail };
    });
    console.log(dataDetail);
  };

  const addPayment = () => {
    setDataPayment([...dataPayment, detail]);
    setItem((prev) => {
      return { ...prev, payment_detail: dataPayment };
    });
    console.log(dataPayment);
  };

  const addResult = () => {
    setDataResult([...dataResult, detail]);
    setItem((prev) => {
      return { ...prev, job_result: dataResult };
    });
    console.log(dataResult);
  };
  
  const callback = (value) => {
    setDetail(value);
    if(value.length !== ""){
      setActive(true);
    }
  };

  const handleTujuan = (value) => {
    setTujuan(value);
    setItem((prev) => {
      return { ...prev, tujuan: tujuan };
    });
    if(value.length !== ""){
      setActive(true);
    }
  };

  // file
  const fileCallback = (name, e) => {
    const nameFile = name;
    setFileDetail(e)
    setItem((prev) => {
      return { ...prev, [nameFile]: e };
    });
    setActive(true);
  }


  // push to api
  const save = async () => {
    await createPost(item)
    .then((res) => {
      setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  console.log(fileDetail);
  console.log(item);
  console.log(active);

  return (
    <NavBar pageName="Persuratan" to="/riwayat">
      <Card>
        <div className="container flex flex-col space-y-4">
          <div className="flex space-x-10">
            <div className="w-[3rem]">
              <Text
                item="Tujuan"
                color="primary"
                className="align-middle mt-[4px]"
              />
            </div>
            <Drop
              onChange={handle}
              callback={handleTujuan}
              name="tujuan"
              item="Surat perjanian Kerja lepas"
              drop={[
                { name: "Surat Perjanjian Kontrak" },
                { name: "Paid" },
                { name: "Declined" },
                { name: "Unconfirm" },
                { name: "Expired" },
              ]}
            />
          </div>
          <div className="flex space-x-10">
            <div className="w-[2.7rem]">
              <Text
                item="No.Surat"
                color="primary"
                className="align-middle mt-[4px]"
              />
            </div>
            <Inputs
              onChange={handle}
              name="no_surat"
              itype="secondary"
              Ticon="hidden"
              className="w-full"
            />
          </div>
        </div>
        <hr className="w-full border-[.5px] border-[#3F4254]/10 mt-8" />

        {/* section 2 */}
        <div className="container-section-two mt-9 flex flex-col space-y-4">
          <Text item="Pihak Pertama" color="header" />
          <div className="flex sm:grid-cols-2 w-full space-x-12">
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="Nama" color="primary" star="on" />
              <Inputs
                itype="primary"
                Ticon="hidden"
                onChange={handle}
                name="nama_pihak_satu"
              />
            </div>
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="Jabatan" color="primary" star="on" />
              <Inputs
                itype="secondary"
                Ticon="hidden"
                onChange={handle}
                name="jabatan_pihak_satu"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Text item="Alamat" color="primary" star="on" />
            <Inputs
              itype="secondary"
              Ticon="hidden"
              onChange={handle}
              name="alamat_pihak_satu"
            />
            <div className="flex">
              <input
                type="checkbox"
                className="h-4 w-4 border-1 rounded-[6px] mr-2 my-2 border-[#B2B2B2]"
              />
              <Text
                item="Gunakan data default"
                color="secondary"
                className="px-0 py-2"
              />
            </div>
          </div>
        </div>
        {/* section 3 */}
        <hr className="w-full border-[.5px] border-[#3F4254]/10 mt-8" />

        <div className="container-section-two mt-9 flex flex-col space-y-4">
          <Text item="Pihak Kedua" color="header" />
          <div className="flex sm:grid-cols-2 w-full space-x-12">
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="Nama" color="primary" star="on" />
              <Inputs
                itype="primary"
                Ticon="hidden"
                onChange={handle}
                name="nama_pihak_dua"
              />
            </div>
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="No. KTP" color="primary" star="on" />
              <Inputs
                itype="primary"
                Ticon="hidden"
                onChange={handle}
                name="ktp_pihak_dua"
              />
            </div>
          </div>
          <div className="flex sm:grid-cols-2 w-full space-x-12">
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="Tempat Lahir" color="primary" star="on" />
              <Inputs
                itype="primary"
                Ticon="hidden"
                onChange={handle}
                name="tempat_lahir_pihak_dua"
              />
            </div>
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="Tanggal Lahir" color="primary" star="on" />
              <ButtonDate
                name="tanggal_lahir_pihak_dua"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Text item="Alamat" color="primary" star="on" />
            <TextArea onChange={handle} name="alamat_pihak_dua" />
            {/* <Inputs itype="primary" Ticon="hidden" type=""/> */}
          </div>
        </div>

        {/* section 4 */}
        <hr className="w-full border-[.5px] border-[#3F4254]/10 mt-8" />

        <div className="container-section-two mt-9 flex flex-col space-y-4">
          <Text item="Perjanjian Kerja" color="header" />
          <div className="flex flex-col space-y-1.5">
            <Text
              item="Tugas dan pekerjaan Pihak Kedua"
              color="primary"
              star="on"
            />
            <Inputs
              itype="primary"
              Ticon="hidden"
              onChange={handle}
              name="tugas_pihak_dua"
            />
          </div>
          <div className="flex sm:grid-cols-2 w-full space-x-12">
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="Rincian Pekerjaan" color="primary" star="on" />
              {dataDetail.map((item) => (
                <ButtonDrag item={item} />
              ))}
              <ButtonInput
                onKeyPress={(event) => {
                  event.key === "Enter" && addDetail();
                }}
                callback={callback}
                name="handulillah"
                item="ulala"
                listi={handleDeleteRincian}
                className={`${rincian === true ? "block" : "hidden"}`}
              />
              <ButtonAdd
                item="Tambahkan Daftar Rincian"
                onClick={handleAddRincian}
              />
            </div>
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text
                item="Penyerahan Hasil Pekerjaan"
                color="primary"
                star="on"
              />
              {dataResult.map((item) => (
                <ButtonDrag item={item} />
              ))}
              <ButtonInput
                onKeyPress={(event) => {
                  event.key === "Enter" && addResult();
                }}
                callback={callback}
                item="ulala"
                listi={handleDeleteHasil}
                className={`${hasil === true ? "block" : "hidden"}`}
              />
              <ButtonAdd
                item="Tambahkan Bentuk Hasil Pekerjaan"
                onClick={handleAddHasil}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex sm:grid-cols-2 w-full space-x-12">
              <div className="w-full relative flex flex-col space-y-1.5">
                <Text item="Jangka Waktu Kerja" color="primary" star="on" />
                <ButtonDate name="start_date" onChange={dateChangeHandler} />
                <div className="flex">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-1 rounded-[6px] mr-2 my-2 border-[#B2B2B2]"
                  />
                  <Text
                    item="Gunakan data default"
                    color="secondary"
                    className="px-0 py-2"
                  />
                </div>
              </div>
              <div className="w-full relative flex flex-col space-y-1.5">
                <Text
                  item="Tanggal"
                  color="primary"
                  className="text-[#FFFFFF]"
                />
                <ButtonDate name="end_date" onChange={dateChangeHandler} />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Text item="Pembayaran" color="primary" star="on" />
              <Inputs
                itype="primary"
                Ticon="hidden"
                onChange={handle}
                name="pembayaran"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Text item="Rincian Pembayaran" color="primary" star="on" />
              {dataPayment.map((item) => (
                <ButtonDrag item={item} />
              ))}
              <ButtonInput
                onKeyPress={(event) => {
                  event.key === "Enter" && addPayment();
                }}
                callback={callback}
                onChange={handle}
                name="payment_detail"
                item="ulala"
                listi={handleDeletePembayaran}
                className={`${pembayaran === true ? "block" : "hidden"}`}
              />
              <ButtonAdd
                item="Tambahkan Daftar Rincian"
                onClick={handleAddPebayaran}
              />
            </div>
          </div>
          <div className="flex sm:grid-cols-2 w-full space-x-12">
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text item="Rincian Pekerjaan" color="primary" star="on" />
              <ButtonUpload item="Tambahkan Daftar Rincian" name="ttd_pihak_satu" fileCallback={fileCallback}/>
            </div>
            <div className="w-full relative flex flex-col space-y-1.5">
              <Text
                item="Penyerahan Hasil Pengerjaan"
                color="primary"
                star="on"
              />
              <ButtonUpload item="Tambahkan Bentuk Hasil Pekerjaan" name="ttd_pihak_dua" fileCallback={fileCallback}/>
            </div>
          </div>
        </div>
        <hr className="w-full border-[.5px] border-[#3F4254]/10 mt-8" />

        {/* tombol simpan dan cetak */}
        <div className="py-5">
          <div className="grid justify-items-end">
            <div className="flex space-x-3">
              <ButtonP item="Simpan Sebagai Draft" onClick={save} className={`${active === true ? "text-[#333333] hover:bg-[#F1F1F1]" : "bg-[#F1F1F1] text-[#B2B2B2]"}`} icon="simpan" />
              <ButtonP item="Cetak" className={`${active === true ? "bg-[#1975FF] text-[#FFFFFF] hover:bg-[#1561D5]" : "bg-[#F1F1F1] text-[#B2B2B2]"}`}/>
            </div>
          </div>
        </div>
      </Card>
    </NavBar>
  );
}
