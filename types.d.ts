interface ECommerceFeature {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface UserRegistration {
  name: string;
  email: string;
  phone: number | undefined;
  password: string;
  cpassword: string;
}

interface UserSignin {
  email: string;
  password: string;
}

interface Product {
  _id: string; // ObjectId
name: string;
des: string;
img: string;
price: string;
}

