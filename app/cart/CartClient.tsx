"use client";

import { useCart } from "@/hooks/useCart";
import ItemContent from "./ItemContent";
import Button from "../components/Button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";

interface CurrentUserProps {
  currentUser: SafeUser | null;
}

const CartClient: React.FC<CurrentUserProps> = ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const router = useRouter();
  const digitals = cartProducts?.filter((item) => item.category === "Digitals");

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl text-center mb-8">Shopping Cart</h2>
      <div
        className="grid
      grid-cols-5
      text-xs
      gap-4
      pb-2
      items-center"
      >
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div
        className="border-t-[1.5px]
      border-slate-200 py-4 flex justify-between gap-4"
      >
        <div className="w-[90px]">
          <Button
            label="Clear Cart"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>${cartTotalAmount}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculated at checkout
          </p>
          <Button
            label={currentUser ? "Checkout" : "Login To Checkout"}
            outline={currentUser ? false : true}
            onClick={() => {
              currentUser ? router.push("/checkout") : router.push("/login");
            }}
          />
          <Link
            href={"/"}
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
          <p>{digitals ? '*All Digital Products will be emailed within 24 hours' : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
