import React, { Component } from 'react';
import ProductForm from './ProductForm';

export class ProductList extends Component {
    static displayName = ProductList.name;

    

    render() {
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
                    <ProductForm />
                </div>
                <div className='col-md-8'>
                    list of productlist
                </div>
            </div>
        );
    }
}