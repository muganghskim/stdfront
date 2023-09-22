/* 백엔드 데이터 필요 pdName categoryName pdDetail pdPrice pdStat pdSize pdImg pdQuantity*/

import { atom } from "recoil";
import axios from "axios";

export interface Product {
  id: string;
  name: string;
  category: string;
  detail: string;
  price: number;
  stat: string;
  size: string;
  imgUrl: string;
}

export interface EnrollData {
  userEmail: string | null;
  pdName: string;
  categoryName: string;
  pdDetail: string;
  pdPrice: string;
  pdStat: string;
  pdSize: string;
  pdQuantity: string;
  image: File | null;
}

// 전체 조회
export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get("http://localhost:8096/api/products");
  return response.data;
};

// 상세 페이지 조회
export const getProductById = async (productId: number): Promise<Product> => {
  const response = await axios.get(
    `http://localhost:8096/api/products/${productId}`
  );
  return response.data;
};

// 검색 기능
export const searchProductsByName = async (
  searchName: string
): Promise<{ searchResults: Product[]; notFound: boolean }> => {
  try {
    const response = await axios.get(
      `http://localhost:8096/api/productSearch/?searchName=${searchName}`
    );

    if (response.status === 200) {
      return { searchResults: response.data, notFound: false };
    } else {
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error(error);
    return { searchResults: [], notFound: true };
  }
};

// // 이미지 변경 기능
// export const updateProductImage = async (
//   id: number,
//   imageUrl: string
// ): Promise<Product> => {
//   const response = await axios.patch(
//     `http://localhost:8080/products/${id}/image`,
//     { imageUrl }
//   );
//   return response.data;
// };

// // // 상품등록
// // export const enroll = async (formData: {
// //     name: string;
// //     description: string;
// //     price: string;
// //     file: File | null;
// //   }) => {
// //     const response = await axios.post("http://localhost:8080/products/enroll", formData,{
// //         headers: {
// //             "Content-Type": "multipart/form-data"
// //           }
// //     });
// //     const { name, description, price, imageUrl} = response.data;

// //     return { name, description, price, imageUrl };
// // };

export const enroll = async (data: EnrollData) => {
  const {
    userEmail,
    pdName,
    categoryName,
    pdDetail,
    pdPrice,
    pdStat,
    pdSize,
    pdQuantity,
    image
  } = data;
  const formData = new FormData();
  if (userEmail) {
    formData.append("userEmail", userEmail);
  }
  formData.append("pdName", pdName);
  formData.append("categoryName", categoryName);
  formData.append("pdDetail", pdDetail);
  formData.append("pdPrice", pdPrice);
  formData.append("pdStat", pdStat);
  formData.append("pdSize", pdSize);
  formData.append("pdQuantity", pdQuantity);

  // 이미지가 있는 경우에만 FormData에 추가
  if (image) {
    formData.append("file", image);
  }

  const response = await axios.post(
    "http://localhost:8096/api/registerProduct",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  const resData: Product = response.data;

  return resData;
};
