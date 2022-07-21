import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { add, editById, getAll, removeById } from './api/product'
import AdminLayout from './layout/AdminLayout'
import UserLayout from './layout/UserLayout'
import ProductList from './pages/admin/product'
import ProductAdd from './pages/admin/product/add'
import ProductEdit from './pages/admin/product/edit'

function App() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      setProducts(data);
    }
    getProducts();
  }, [])

  const handleAdd = async (dataInput: any) => {
    const { data } = await add(dataInput);
    return setProducts([...products, data])
  }

  const handleEdit = async (dataInput: any) => {
    const { data } = await editById(dataInput);
    return setProducts(products.map(item => item.id === data.id ? data : item))
  }

  const handleRemove = async (id: number) => {
    const { data } = await removeById(id);
    console.log(data);
    return setProducts(products.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index />
        </Route>
        <Route path='admin' element={<AdminLayout />}>
          <Route path='phone' >
            <Route index element={<ProductList data={products} removeItem={handleRemove} />} />
            <Route path='add' element={<ProductAdd handleAdd={handleAdd} />} />
            <Route path='edit/:id' element={<ProductEdit editItem={handleEdit} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
