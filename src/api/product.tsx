import { instance } from "./instance"

export const getAll = () => {
   return instance.get('/products');
}

export const getById = (id: any) => {
   return instance.get(`/products/${id}`);
}

export const add = (data: any) => {
   return instance.post(`/products`, data);
}

export const editById = (data: any) => {
   return instance.put(`/products/${data.id}`, data);
}

export const removeById = (id: number) => {
   const url = `/products/${id}`;
   return instance.delete(url);
}