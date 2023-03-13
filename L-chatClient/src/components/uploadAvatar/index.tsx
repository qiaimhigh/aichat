// import React, { useState } from "react";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { message, Upload } from "antd";
// import type { RcFile } from "antd/es/upload";

// export default function UploadAvatar() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [imgUrl, setImgUrl] = useState<string>("");

//   const getBase64 = (file: RcFile, callback: (src: string) => void) => {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => callback(reader.result as string));
//     reader.readAsDataURL(file);
//   };

//   // 上传前
//   const beforeUpload = (file: RcFile) => {
//     // 判断是不是jpeg和png格式
//     const isJpgPng: boolean =
//       file.type === "image/jpeg" || file.type === "image/png";
//     if (!isJpgPng) {
//       message.error("图片的格式只能是jpeg和png");
//     }
//     // 图片的大小不能超过2MB
//     const imgSize: boolean = file.size / 1024 / 1024 < 2;
//     if (!imgSize) {
//       message.error("图片的大小不能超过2MB");
//     }
//     return imgSize && isJpgPng;
//   };

//   const handleChange = (info: any) => {
//     if (info.file.status === "upLoading") {
//       setIsLoading(true);
//       return;
//     }
//     if (info.file.status === "done") {
//       getBase64(info.file.originFileObj as RcFile, (url) => {
//         setIsLoading(false);
//         setImgUrl(url);
//       });
//     }
//   };

//   const uploadButton = (
//     <div>
//       {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div style={{ marginTop: "8px" }}>UpLoad</div>
//     </div>
//   );

//   return (
//     <>
//       <Upload
//         name="avatar"
//         beforeUpload={beforeUpload}
//         onChange={handleChange}
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}
//       >
//         {imgUrl ? <img alt="avatar" src={imgUrl} /> : uploadButton}
//       </Upload>
//     </>
//   );
// }
import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </>
  );
};

export default App;