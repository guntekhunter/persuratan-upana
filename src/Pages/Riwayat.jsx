import React from "react";
import NavBar from "../Component/UiComponent/NavBar";
import Card from "../Component/UiComponent/Card";
import Text from "../Component/UiComponent/Text/TextColor";
import TableHead from "../Component/UiComponent/Table/TableHead";
import TableBody from "../Component/UiComponent/Table/TableBody";
import Status from "../Component/UiComponent/Text/Status";
import Action from "../Component/UiComponent/Buttons/Action";

export default function Riwayat() {
  return (
    <NavBar pageName="Riwayat" to="/persuratan">
      <Card className="space-y-9">
        <Text
          item="Riwayat Persuratan"
          color="headerB"
          className="text-[#333333]"
        />
        <div className="overflow-x-auto relative sm:rounded-lg border-[1.5px] border-[#E6E6E6]">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="bg-[#F7F7F7] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="h-[3rem] text-xs">
                <TableHead className="w-[1%] pl-10 text-left" item="No." />
                <TableHead className="w-[3%] pl-10 text-left" item="Tanggal" />
                <TableHead
                  className="w-[8%] pl-10 text-left"
                  item="No. Surat"
                />
                <TableHead className="w-[9%] pl-10 text-left" item="Tujuan" />
                <TableHead className="w-[4%] pl-10 text-left" item="Status" />
                <TableHead className="w-[3%] pl-10 text-left" item="Action" />
              </tr>
            </thead>
            <tbody>
              <tr className="mt-3 h-20 px-10 text-xs text-[#7E8299] border-b-[1px]">
                <TableBody item="1" className="text-center" />
                <TableBody item="11/12/2022" />
                <TableBody item="001/SPK-02/UPAA/X/2022" />
                <TableBody item="Surat Perjanjian Kerja Pekerja Lepas" />
                <TableBody>
                  <Status item="printed" />
                </TableBody>
                <TableBody>
                  <a target="_blank" href="/cover letter.docx" className="text-[#1975FF]">Lihat</a>
                </TableBody>
              </tr>
              <tr className="mt-3 h-20 px-10 text-xs text-[#7E8299] border-b-[1.5px]">
                <TableBody item="1" className="text-center" />
                <TableBody item="11/12/2022" />
                <TableBody item="001/SPK-02/UPAA/X/2022" />
                <TableBody item="Surat Perjanjian Kerja Pekerja Lepas" />
                <TableBody>
                  <Status item="draf" />
                </TableBody>
                <TableBody>
                  <Action item="edit"/>
                </TableBody>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </NavBar>
  );
}
