import http from "./http";
import baseUrl from "@/config/config";

const order = {
  generateOrders(orders) {
    return http.post(baseUrl.generateOrdersUrl,orders);
  }
};
export default order;
