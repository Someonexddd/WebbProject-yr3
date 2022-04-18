import React, { Component } from 'react';
import ProductForm from './ProductForm';
import axios from "axios";

function ReturnFunc() {
    

    const addOrEdit = (formData, onSucess) => {
        productAPI().create(formData)
            .then(res => {
                onSucess();
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