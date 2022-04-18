import React, { useState } from 'react';
import '../custom.css';



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

export default function ProductForm(props) {

    const { addOrEdit } = props;

    const [values, setValues] = useState(initalFieldValues);
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {

            setValues({
                ...values,
                Name: null,
                ReleaseYear: null,
                Country: null,
                Format: null,
                Genre: null,
                UnitsInStock: null,
                imageName: null,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () => {
        let temp = {}
        temp.Name = values.Name === "" ? false : true;
        temp.ReleaseYear = values.ReleaseYear === "" ? false : true;
        temp.UnitsInStock = values.UnitsInStock === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }

    const resetForm = () => {
        setValues(initalFieldValues)
        document.getElementById('image-uploader').value = null;
        document.getElementById('Name').value = null;
        document.getElementById('ReleaseYear').value = null;
        document.getElementById('Country').value = null;
        document.getElementById('Format').value = null;
        document.getElementById('Genre').value = null;
        document.getElementById('UnitsInStock').value = null;
        setErrors({});
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const formData = new FormData();
            formData.append('ProductId', values.ProductId)
            formData.append('Name', values.Name)
            formData.append('ReleaseYear', values.ReleaseYear)
            formData.append('AddDate', values.AddDate)
            formData.append('Country', values.Country)
            formData.append('Format', values.Format)
            formData.append('Genre', values.Genre)
            formData.append('UnitsInStock', values.UnitsInStock)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm())
        }
    }

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '')







    return (
        <>
            <div className='container-fluid text-center'>
                <p className='lead'>A Product</p>
            </div>
            <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
                <div className='card'>
                    <img src={values.imageSrc} className="card-img-top img-fluid profilepiclarge mx-auto" alt='Product shown' />
                    <div className='card-body'>
                        <div className='form-group'>
                            <input type="file" accept='image/*' className={'form-control-file' + applyErrorClass('imageSrc')}
                                onChange={showPreview} id="image-uploader" />
                        </div>
                        <div className='form-group'>
                            <input className={'form-control' + applyErrorClass('Name')} placeholder='Name' name="Name" values={values.Name} onChange={handleInputChange} id="Name"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control" + applyErrorClass('ReleaseYear')} placeholder='YYYY-MM-DD' name="ReleaseYear" values={values.ReleaseYear} onChange={handleInputChange} id="ReleaseYear"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='Country' name="Country" values={values.Country} onChange={handleInputChange} id="Country"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='Format' name="Format" values={values.Format} onChange={handleInputChange} id="Format"></input>
                        </div>
                        <div className='form-group'>
                            <input className="form-control" placeholder='Genre' name="Genre" values={values.Genre} onChange={handleInputChange} id="Genre"></input>
                        </div>
                        <div className='form-group'>
                            <input className={"form-control" + applyErrorClass('UnitsInStock')} placeholder='UnitsInStock' name="UnitsInStock" values={values.UnitsInStock} onChange={handleInputChange} id="UnitsInStock"></input>
                        </div>
                        <div className='form-group text-center'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}