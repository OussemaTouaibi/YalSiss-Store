import React, { Fragment, useState, useEffect } from 'react'
import Select from 'react-select';


import Layout from'../../../userInterface/components/shared/layout'
import MetaData from '../../../userInterface/components/shared/metaData'
import Sidebar from '../sideBar/sideBar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { allCategories, getCategorySubs } from '../../../actions/categoryActions'
import { newProduct, clearErrors } from '../../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../../constants/productConstants'

import './productList.scss'



const NewProduct = ({ history }) => {


const options = [
    {label:'Black', value:'Black'},
    {label:'Brown', value:'Brown'},
    {label:'Blue', value:'Blue'},
    {label:'Pink', value:'pink'},
    {label:'Yellow', value:'Yellow'},
    {label:'Red', value:'Red'},
]
const optionss = [
    {label:'S', value:'S'},
    {label:'M', value:'M'},
    {label:'L', value:'L'},
    {label:'XL', value:'XL'},
    {label:'XXL', value:'XXL'},
    {label:'XXXL', value:'XXXL'},
    {label:'38', value:'38'},
    {label:'39', value:'39'},
    {label:'40', value:'40'},
    {label:'41', value:'42'},
    {label:'42', value:'42'},
    {label:'43', value:'43'},
    {label:'44', value:'44'},
    {label:'45', value:'45'},
]
const [subOptions, setSubOptions] = useState([]);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [subs, setSubs] = useState('');

    const [categoriess, setCategoriess] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [stock, setStock] = useState(0);
    const [seller, setSeller] = useState('');
    const [images, setImages] = useState([]);

    const [imagesPreview, setImagesPreview] = useState([]);

    


    const { categories } = useSelector(state => state.allCategories);
  

    


    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProduct);
    

    useEffect(() => {
        dispatch(allCategories());

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/admin/products');
            alert.success('Product created successfully');
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('price', price);
        formData.set('description', description);
        formData.set('category', category);
     

        formData.set('stock', stock);
        formData.set('seller', seller);

        sizes.forEach(size => {
            formData.append('sizes', size);
         })

        colors.forEach(color => {
            formData.append('colors', color);
         })

        
           formData.append('subs', subs);
    

        images.forEach(image => {
            formData.append('images', image)
        })

        dispatch(newProduct(formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagesPreview([]);
        setImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }
    

    const [showSub, setShowSub] = useState(false);

    const handleCategoryChange = (e) => {
        
        e.preventDefault();
        console.log('CLICKED CATEGORY', e.target.value);
        setCategoriess({subs:[], category: e.target.value });
        setCategory(e.target.value);
        getCategorySubs(e.target.value).then(res => {
            setSubOptions(res.data);
        
            console.log('SUBS OPTIONS ON  CATEGORY CLICK ', res);
        });
        setShowSub(true);

    }
    


    return (
        <Layout>
        <Fragment>
            <MetaData title={'New Product'} />
                       <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                      
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">New Product</h1>
                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        style={{width:'100%'}}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        style={{width:'100%'}}
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>


                                <div>
                             <label> Colors </label>
                             <Select
                            
                             isMulti
                            defaultValue={colors}
                            onChange={setColors}
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
   />
                             </div> 
                       


                         <div >
                             <label> sizes </label>
                             <Select
                            
                            isMulti
                           defaultValue={sizes}
                           onChange={setSizes}
                           options={optionss}
                           className="basic-multi-select"
                           classNamePrefix="select"
  />
                             </div> 
      



                                <div className="form-group">
                                    <label htmlFor="category_field">Category</label>
                                    <select
              name="category"
              className="form-control"
              onChange={handleCategoryChange}
              suboption={subOptions}
              showSub={showSub}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((e) => (
                  <option key={e._id} value={e._id}>
                    {e.name}
                  </option>
                ))}
           
            </select>
           
                                </div>



                             
                           { showSub && ( <div >
                             <label> Sub Category</label>
                            
                             <select
            
            className="form-control"
            onChange={(e) => setSubs(e.target.value)}
          >
            <option>Please select</option>
            {subOptions  &&
              subOptions.map((e) => (
                <option key={e._id} value={e.name}>
                  {e.name}
                </option>
              ))}
         
          </select> 


                             </div> )}
                            
              














                                <div className="form-group">
                                    <label htmlFor="stock_field">Stock</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="seller_field">Seller Name</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                        style={{width:'100%'}}
                                        value={seller}
                                        onChange={(e) => setSeller(e.target.value)}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="nomad-btn"
                                    style={{marginLeft:'40%'}}
                                    disabled={loading ? true : false}
                                >
                                    CREATE Product
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
        </Layout>
    )
}

export default NewProduct;