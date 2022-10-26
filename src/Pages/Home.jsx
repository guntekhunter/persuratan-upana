import React from "react";
import Button from "../Component/UiComponent/Button";
import Text from "../Component/UiComponent/TextColor";
import Inputs from "../Component/UiComponent/Inputs/Inputs";
import Ipassword from "../Component/UiComponent/Inputs/Ipassword";
import SignInImage from "../Assets/SignInLogo.png";
import Logo from "../Assets/Logo Upana.png";
import Footer from "../Component/UiComponent/Footer";
import Card from "../Component/UiComponent/Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div className="Home grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-screen object-cover" src={SignInImage}></img>
        </div>
        <div className="flex flex-col justify-center h-screen">
          <div className="logo t-0">
            <img className="pt-5 pl-6 w-[8rem]" src={Logo} />
          </div>
          <div className="form flex justify-center h-full">
            <div className="form-container flex flex-col space-y-2 grid content-around">
              <form action="" className="space-y-4">
                <div className="header">
                  <div className="header-container w-2">
                    <p className="text-[2rem] font-bold text-[#333333] tracking-tight leading-9 mb-2">
                      Selamat Datang
                    </p>
                  </div>
                  <Text
                    item="Silahkan masuk untuk melanjutkan"
                    color="secondary"
                  />
                </div>

                <div className="flex flex-col input-label-container space-y-1">
                  <Text htmlFor="" color="primary" item="Email"/>
                  {/* if error */}
                  {/* <Inputs itype="error"/> */}
                  {/* if Success */}
                  <Inputs itype="primary" Ticon="hidden"/>
                </div>
                <div className="flex flex-col input-label-container space-y-1">
                  <Text htmlFor="" color="primary" item="Password"/>
                  <Ipassword></Ipassword>
                  <Card type="error" item="password/email salah" />
                </div>
                <div>
                  <Link to={"/persuratan"}>
                    <Button type="primary" className="w-full">
                      <Text item="Masuk" />
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <Footer>2020 - Upana Studio. All rights reserved</Footer>
        </div>
      </div>
    </section>
  );
}
