import React from "react";
import './index.less'

type Props = {
  setTextMsg: (value: string)=>void
};

const Index = (props: Props) => {
  return (
    <div className="custom-upload-img-com">
      <div className="upload-img-com-wrapper">
        <div className="option">
          <label htmlFor="up-server">
            <i className="option-item">
              上传到服务器
              <input
                type="file"
                id="up-server"
                title="图片"
                accept="image/pg, image/jpeg,image/gif,image/jpg"
                onChange={(e)=>{console.log(e.target.value);
                }}
              />
            </i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Index;
