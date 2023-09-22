import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { enroll, EnrollData, Product } from "../recoil/atoms/products"; // enroll 함수가 포함된 파일로 경로를 변경해주세요.
import { isLoggedInState } from "../recoil/atoms/auth";

const Admin = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const adminEmail = localStorage.getItem("email");
  const [formData, setFormData] = useState<EnrollData>({
    userEmail: adminEmail,
    pdName: "",
    categoryName: "",
    pdDetail: "",
    pdPrice: "",
    pdStat: "",
    pdSize: "",
    pdQuantity: "",
    image: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (name === "image") {
      if (files && files.length > 0) {
        console.log(files[0]);
        setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.value }));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const resData: Product = await enroll(formData);
      console.log("Enrolled product:", {
        resData
      });
      alert("상품이 등록되었습니다.");
    } catch (error) {
      console.error("Error while enrolling product:", error);
      alert("상품 등록 중 오류가 발생하였습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>관리자 페이지</h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div>
            <label htmlFor="pdName">상품 이름:</label>
            <input
              type="text"
              id="pdName"
              name="pdName"
              value={formData.pdName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="categoryName">카테고리:</label>
            <select
              id="categoryName"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleSelectChange}
              required
            >
              {/* 카테고리 옵션을 적절하게 추가해주세요 */}
              <option value="">-- 선택 --</option>
              <option value="티셔츠">티셔츠</option>
              <option value="바지">바지</option>
            </select>
          </div>
          <div>
            <label htmlFor="pdDetail">상품 상세 설명:</label>
            <textarea
              id="pdDetail"
              name="pdDetail"
              value={formData.pdDetail}
              onChange={handleTextareaChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pdPrice">가격:</label>
            <input
              type="number"
              id="pdPrice"
              name="pdPrice"
              value={formData.pdPrice}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pdStat">상품 상태:</label>
            <input
              type="text"
              id="pdStat"
              name="pdStat"
              value={formData.pdStat}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pdSize">상품 크기:</label>
            <input
              type="text"
              id="pdSize"
              name="pdSize"
              value={formData.pdSize}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="pdQuantity">상품 수량:</label>
            <input
              type="number"
              id="pdQuantity"
              name="pdQuantity"
              value={formData.pdQuantity}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image">이미지:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">상품 등록하기</button>
        </form>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Admin;
