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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, useState } from "react";

export function AddProducts() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [des, setDes] = useState("");


    const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/add-product", {
            method: "POST",
            body: JSON.stringify({ name, img, price, des }),
        })
        console.log(res);
        setOpen(false)
        alert("Succesfully Posted your Product")
    }



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4" onSubmit={submitHandler}>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Product Name
                        </Label>
                        <Input id="product" value={name} onChange={(e) => { setName(e.target.value) }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Product Image
                        </Label>
                        <Input id="product" value={img} onChange={(e) => { setImg(e.target.value) }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Price
                        </Label>
                        <Input id="price" value={price} onChange={(e) => { setPrice(e.target.value) }} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Description
                        </Label>
                        <Input id="des" value={des} onChange={(e) => { setDes(e.target.value) }} className="col-span-3" />
                    </div>
                    <Button type="submit">Save changes</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
