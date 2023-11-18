import Container from "../components/Container";


const ShippingPolicyPage = () => {
  return (
    <div className="mt-4">
        <Container>
            <div className="flex justify-center pt-2">
            <div className="flex flex-col max-w-[1000px]">
                <h1 className="font-bold text-2xl pb-2">Shipping Policy:</h1>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">Processing Time:</h3>
                <p className="translate-x-4 pb-2 text-sm">Orders are typically processed within 1-2 business days after payment confirmation. During peak seasons, processing times may be extended.</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">Shipping Rates:</h3>
                <p className="translate-x-4 pb-2 text-sm">Shipping costs are calculated at checkout based on the weight and destination of the order. We offer standard and expedited shipping options to suit your needs.</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">Domestic Shipping:</h3>
                <p className="translate-x-4 pb-2 text-sm">We offer domestic shipping within the United States. Standard shipping usually takes 3-5 business days, while expedited shipping can take 1-2 business days.</p>
                <h3 className="font-semibold text-lg pb-1 translate-x-2">International Shipping:</h3>
                <p className="translate-x-4 pb-2 text-sm">We currently do not offer international shipping. We apologize for any inconvenience.</p>
            </div>
            </div>
        </Container>
    </div>
  );
}

export default ShippingPolicyPage;
