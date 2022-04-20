import React, { Component, useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import axios from "axios";

function ReturnFunc() {

    const [ProductListConst, setProductListConst] = useState([])

    useEffect(() => {
        refreshProductList();
    }, [])

    const addOrEdit = (formData, onSucess) => {
        productAPI().create(formData)
            .then(res => {
                onSucess();
                refreshProductList();
            })
            .catch(err => console.log(err))
    }
    
    const productAPI = (url = 'http://localhost:5000/api/ProductModels') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshProductList() {
        productAPI().fetchAll()
            .then(res => setProductListConst(res.data))
            .catch(err => console.log(err))
    }


    const imageCard = data => (

        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={data.ImageSrc} alt={data.ImageAlt} />
            <div class="card-body">
                <h5 class="card-title">{data.Name}</h5>
                <p class="card-text">{data.Artist}</p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>
    )

    return (
        <div className='row mb-4'>
            <div className='col-md-12'>
                <div container py-4>
                    <div class="p-5 mb-4 bg-light rounded-3">
                        <div class="container-fluid py-5">
                            <h1 class="display-5 fw-bold text-center">Product register</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <ProductForm
                    addOrEdit={addOrEdit} />
            </div>
            <div className='col-md-8'>
                <table>
                    <tbody>
                        {
                            [...Array(Math.ceil(ProductList.length / 3))].map((e, i) =>
                                <tr>
                                    <td>{imageCard(ProductList[3 * i])}</td>
                                    <td>{ProductList[3 * i + 1] ? imageCard(ProductList[3 * i + 1]) : null}</td>
                                    <td>{ProductList[3 * i + 2] ? imageCard(ProductList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export class ProductList extends Component {
    static displayName = ProductList.name;
    render() {
        return (
            ReturnFunc()
        );
    }
}