import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import { Container } from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderConfirm = () => {
  return (
    <>
    <Container>
    <BreadCrumb currentPageTitle="Order Confirm" />
    <div className=" grid min-h-screen place-content-center bg-lime-100 text-stone-900 px-4">
        <div className="flex flex-col text-center gap-4 ">
            <h1 className= " mt-6 capitalize sm:text-4xl tracking-tight text-primary  text-stone-900 text-3xl font-bold">
                Thank you for your order!
            </h1>
            <p className= " mt-4 text-stone-900 text-xl font-bold">
                You will receive an email with your order details.
            </p>
        </div>
    </div>
    
    </Container>
    </>
  )
}

export default OrderConfirm;

