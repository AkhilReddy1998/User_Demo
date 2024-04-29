import http from "./http";

class ProductService {
    queryString(payload) {
        return Object.keys(payload)
          .map((key) => key + "=" + payload[key])
          .join("&");
      }

    ProductList(data) {
        return http.post("product/list", data);
      }


}

export default new ProductService();