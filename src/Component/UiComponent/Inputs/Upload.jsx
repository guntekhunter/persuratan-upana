import React, { useState, useCallback } from "react";
import TextColor from "../Text/TextColor";
import { HiUpload } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDropzone } from "react-dropzone";

export default function Upload({ name, fileCallback }) {
  const [files, setFiles] = useState([]);
  const [upload, setUpload] = useState(false);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      fileCallback(name, files);
      setUpload(true);
    },
  });
  console.log(files);
  console.log(upload);

  return (
    <div {...getRootProps()}>
      <div className="grid border-[1.5px] border-dashed rounded-[6px] place-content-around text-center px-3 py-4 space-y-1">
        <div className="flex place-content-around mx-3 my-3 p-0">
          {isDragActive ? (
            <BsCheckCircleFill className="place-content-center text-[#1975FF]" />
          ) : (
            <>
              {upload ? (
                <BsCheckCircleFill className="place-content-center text-[#1975FF]" />
              ) : (
                <HiUpload className="place-content-center text-[#1975FF]" />
              )}
            </>
          )}
        </div>
        <TextColor
          item="Upload file"
          color="primary"
          className="font-bold text-[14px] flex justify-around"
        />
        <div className="flex">
          <TextColor
            item="Drop files disini or "
            color="dark"
            className="text-[12px]"
          />
          <label className="text-[12px] mx-1 text-[#1975FF]">
            <input
              {...getInputProps()}
              type="file"
              multiple
              className="sr-only"
            />
            <u>pilih</u>
          </label>
          <TextColor item="dari device" color="dark" className="text-[12px]" />
        </div>
      </div>
    </div>
  );
}
