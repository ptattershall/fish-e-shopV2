import Container from "../components/Container";


const ReturnPolicyPage = () => {
  return (
    <div className="mt-4">
        <Container>
            <div className="flex justify-center pt-2">
            <div className="flex flex-col max-w-[1000px]">
                <h1 className="font-bold text-2xl pb-2 pt-4">Returns Policy:</h1>
                <p className="translate-x-4 pb-2 text-sm">We want you to be completely satisfied with your purchase. If you're not happy with your order, please follow the guidelines below for returns:</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">Return Eligibility:</h3>
                <p className="translate-x-4 pb-2 text-sm">Items must be unused and in their original condition.</p>
                <p className="translate-x-4 pb-2 text-sm">Returns must be initiated within 7 days of the delivery date.</p>
                <p className="translate-x-4 pb-2 text-sm">Customized or personalized items are not eligible for return.</p>
                <p className="translate-x-4 pb-2 text-sm">All digital product purchases are not eligable for return.</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">How to Initiate a Return:</h3>
                <p  className="translate-x-4 pb-2 text-sm">Contact our customer service team at the <span>Contact</span> section of our site.</p>
                <p className="translate-x-4 pb-2 text-sm">Pack the items securely in the original packaging.</p>
                <p className="translate-x-4 pb-2 text-sm">Ship the items to the provided return address.</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">Refund Process:</h3>
                <p className="translate-x-4 pb-2 text-sm">Once we receive the returned items, we will inspect them and process a refund within 5-7 business days. The refund will be issued to the original payment method.</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">Exchanges:</h3>
                <p className="translate-x-4 pb-2 text-sm">We currently do not offer exchanges. If you need a different item, please place a new order and initiate a return for the original item.</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">Return Shipping:</h3>
                <p className="translate-x-4 pb-2 text-sm">Customers are responsible for return shipping costs unless the return is due to a defective or incorrect item.</p>
            </div>
            </div>
        </Container>
    </div>
  );
}

export default ReturnPolicyPage;