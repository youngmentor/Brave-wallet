import KorapayCheckout from "@/hook/korapaycheckout";
import { KorapayProps } from "../interface/korapaycheckoutInterface";


const Korapay = {
  initializePayment: (props: KorapayProps) => {
    return <KorapayCheckout {...props} />;
  },
};

export default Korapay;
