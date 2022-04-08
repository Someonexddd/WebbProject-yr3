import React, { useState, useEffect } from 'react';
import '../custom.css';
import axios from "axios";
import { updateDecorator } from 'typescript';


const defaultImageSrc = "/img/Q1OGUTBU_400x400.jpg";

const initalFieldValues = {
    ProductId: "",
    Name: "",
    ReleaseYear: "",
    AddDate: "",
    Country: "",
    Format: "",
    Genre: "",
    UnitsInStock: "",
    imageName: "",
    imageSrc: defaultImageSrc,
    imageFile: null
}

export default function ProductForm() {

    const [values, setValues] = useState(initalFieldValues);
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const showPreview = e => {
        if(e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            
            const reader = new FileReader();
            reader.onload = x=> {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc : x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () =>{
        let temp = {}
        temp.Name = values.Name===""?false:true;
        temp.imageSrc = values.imageSrc===defaultImageSrc?false:true;
        setErrors(temp)
        return Object.values(temp).every(x => x===true)
    }

    const resetForm = ()=> {
        setValues(initalFieldValues)
        document.getElementById("image-uploader".value = null);
        setErrors({});
    }

    const handleFormSubmit = e =>{
        e.preventDefault()
        if (validate()) {
            const formData = new FormData();
            FormData.append('ProductId',values.ProductId)
            FormData.append('Name',values.Name)
            FormData.append('ReleaseYear',values.ReleaseYear)
            FormData.append('AddDate',values.AddDate)
            FormData.append('Country',values.Country)
            FormData.append('Format',values.Format)
            FormData.append('Genre',values.Genre)
            FormData.append('UnitsInStock',values.UnitsInStock)
            FormData.append('imageName',values.imageName)
            FormData.append('imageFile',values.imageFile)
            addOrEdit(formData,resetForm)
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field]===false)?' invalid-field':'')

    const productAPI = (url = '') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }


    const addOrEdit = (formData, onSucess) => {
        productAPI().create(formData)
        .then(res => {
            onSucess();
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            <div className='container-fluid text-center'>
                <p className='lead'>A Product</p>
            </div>
            <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
                <div className='card'>
                    <img src={values.imageSrc} className="card-img-top" alt='Product shown'/>
                    <div className='card-body'>
                        <div className='form-group'>
                            <input type="file" accept='image/*' className={'form-control-file'+applyErrorClass('imageSrc')}
                            onChange={showPreview} id="image-uploader"/>
                        </div>
                        <div className='form-group'>
                            <input className={'form-control'+applyErrorClass('Name')} placeholder='Name' name="Name" values={values.Name} onChange={handleInputChange}></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='ReleaseYear' name="ReleaseYear" values={values.ReleaseYear}></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='Country' name="Country" values={values.Country}></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='Format' name="Format" values={values.Format}></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='Genre' name="Genre" values={values.Genre}></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='UnitsInStock' name="UnitsInStock" values={values.UnitsInStock}></input>
                        </div>
                        <div className='form-group text-center'>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}