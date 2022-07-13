const { Products, ProductsDetails, sequelize, Brands } = require("../models");
const { Op } = require("sequelize");

const filterProduct = async (req, res, next) => {
  const params = req.query;
  const checkQuery = Object.keys(params).length === 0;
  // console.log(params["hang-san-xuat"]);
  if (!checkQuery) {
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
    } else {
      req.rangePrice = [{ price: { [Op.gt]: 0 } }];
    }
    // Sort By Brand
    if (params["hang-san-xuat"]) {
      const brand = params["hang-san-xuat"]?.split(",");
      const resBrand = brand?.reduce((res, acc, i) => {
        const name = acc.charAt(0).toUpperCase() + acc.slice(1);
        // console.log(name);
        res.push({ name });
        return res;
      }, []);
      req.rangeBrand = resBrand;
      // console.log(resBrand);
    }

    next();
  } else {
    try {
      const products = await Brands.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
        include: {
          model: Products,
          include: ProductsDetails,
        },
        order: [["id", "asc"]],
      });
      res.status(200).json({
        status: "Success",
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error,
      });
    }
  }
};

module.exports = { filterProduct };
