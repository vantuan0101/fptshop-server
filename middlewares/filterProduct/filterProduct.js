const { Products, ProductsDetails, sequelize } = require("../../models");
const { Op } = require("sequelize");

const filterProduct = async (req, res, next) => {
  const params = req.query;
  const checkPrice = Object.keys(params).length === 0;
  // console.log(params["hang-san-xuat"]);
  if (!checkPrice) {
    // Sort By Range Price
    if (params["muc-gia"]) {
      const optionPrice = params["muc-gia"]?.split(",");
      const resOptionPrice = optionPrice?.reduce((res, acc, i) => {
        if (acc == "duoi-2-trieu") {
          res.push({ price: { [Op.lt]: 2000000 } });
        }
        if (acc == "tu-2-4-trieu") {
          res.push({ price: { [Op.between]: [2000000, 4000000] } });
        }
        if (acc == "tu-4-7-trieu") {
          res.push({ price: { [Op.between]: [4000000, 7000000] } });
        }
        if (acc == "tu-7-13-trieu") {
          res.push({ price: { [Op.between]: [7000000, 13000000] } });
        }
        if (acc == "tren-13-trieu") {
          res.push({ price: { [Op.gt]: 13000000 } });
        }

        return res;
      }, []);
      req.rangePrice = resOptionPrice;
    }
    // Sort By Brand
    if (params["hang-san-xuat"]) {
      const brand = params["hang-san-xuat"]?.split(",");
      const resBrand = brand?.reduce((res, acc, i) => {
        const name = acc.charAt(0).toUpperCase() + acc.slice(1);
        // console.log(name);
        res.push({ brand: name });
        return res;
      }, []);
      req.rangeBrand = resBrand;
      // console.log(resBrand);
    }
    // console.log(params["tim-kiem"]);
    if (params["tim-kiem"]) {
      const search = params["tim-kiem"];
      req.search = search;
    }
  }
  next();
};

module.exports = { filterProduct };
