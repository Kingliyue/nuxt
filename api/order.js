import http from "./http";
import baseUrl from "@/config/config";

const order = {
  generateOrders(orders) {
    return http.post(baseUrl.generateOrdersUrl,orders);
  },
  getOrderInfo(id){
    let url = baseUrl.getOrderInfoUrl+'/'+id
    return http.get(url)
  }
};
export default order;
