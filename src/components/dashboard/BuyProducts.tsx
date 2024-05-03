"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import { useState } from "react";

export function BuyProducts({ productsInCart:pdc, email }: { productsInCart: Product[], email: string | undefined }) {
    const [open, setOpen] = useState(false);
    const [productsInCart, setProductsInCart] = useState(pdc);
    const [showPayment, setShowPayment] = useState(false);
    const [showProcessing, setShowProcessing] = useState(false);
    const [showSummary, setShowSummary] = useState(true);
    let total = 0;
    const submitHandler = async () => {
        setShowSummary(false)
        setShowProcessing(true)
        try {
            const res = await fetch("/api/empty-cart", {
                method: "DELETE",
                body: JSON.stringify({
                    email
                })
            })
            if (res.ok) {
                setShowPayment(true)
            }
        } catch (error) {
            console.log(error);
            setShowSummary(true)
        } finally {
            setShowProcessing(false)
        }
    }

    productsInCart.forEach(product => total += Number(product.price))

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default" size="default" className='hover:bg-primary hover:scale-110 transition'>Proceed to Checkout</Button>
            </DialogTrigger>
            {showSummary && <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Cart Summary</DialogTitle>
                    <DialogDescription>
                        <table className="grid place-content-center  py-4">
                            <thead className="grid place-content-center grid-cols-2 gap-5 text-lg">
                                <th>Products</th>
                                <th>Price</th>
                            </thead>
                            <tbody >
                                {productsInCart.map(product => {
                                    return (<tr key={product._id} className="grid place-content-center grid-cols-2 gap-5">
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                    </tr>)
                                })}
                                <tr className="grid place-content-center grid-cols-2 gap-5 text-lg font-bold" > <td>Total</td> <td>{total}</td></tr>
                            </tbody>
                        </table>
                    </DialogDescription>
                </DialogHeader>
                <Button type="button" variant="main" onClick={submitHandler}>Buy Now</Button>
            </DialogContent>}
            {showProcessing && <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader className="grid place-content-center">
                    <Loader2 className="transition animate-spin" />
                </DialogHeader>
            </DialogContent>}
            {showPayment && <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader className="grid place-content-center">
                    <DialogTitle>Payment Successful</DialogTitle>
                    <DialogDescription>Delivery on its way!!</DialogDescription>
                </DialogHeader>
            </DialogContent>}
        </Dialog>
    )
}
