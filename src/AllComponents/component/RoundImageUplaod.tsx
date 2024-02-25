import { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { getImageUrl, saveImageurl } from "../../Utils/Request/Constants";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
type filenameT = { filename?: string; imageName: (filename: any) => void };
const RoundImageUpload = ({ filename = "null", imageName }: filenameT) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
        imageName(info.file.response.data);
        // console.log(info.file.response.data); //filename
      });
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    return isJpgOrPng;
  };

  useEffect(() => {
    if (filename != "null") {
      setImageUrl(getImageUrl + filename);
      imageName(filename);
    }
  });

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      {/* <Upload
        name="file"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action={saveImageurl}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload> */}

      <Upload
        name="file"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action={saveImageurl}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};

export default RoundImageUpload;
