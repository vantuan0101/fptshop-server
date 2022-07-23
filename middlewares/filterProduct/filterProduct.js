const { Products, ProductsDetails, sequelize } = require("../../models");
const { Op } = require("sequelize");

const filterProduct = async (req, res, next) => {
  const params = req.query;
  const checkPrice = Object.keys(params).length === 0;
  // console.log(params);
  if (!checkPrice ) {
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
    // sort = 'ban-chay-nhat' order : [] , if sort desc , asc order : [['price', sort]]   
    if (params.sort == "ban-chay-nhat" || !params.sort) {
      req.sortPice = []
    }else {
      req.sortPice  = [["price", `${params.sort}`]] 
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
   
    if (params["trang"] || params.limit) {
      // can get product without page
      // can't get product without limit
      // get product with limit and page -> pagination
      const limit = params.limit * 1 || 10;
      const pagination = params["trang"] * 1 || null;
      const skip = pagination ?  pagination * limit -limit : null; 
      // console.log(limit,pagination,skip);
      req.page = { skip, limit };
    } else {
      req.page = { skip: null, limit: null };
    }
  }
  if(params["muc-gia"] || params.sort || params["hang-san-xuat"] || params["trang"] || params.limit) {
    next();
  }else{
    res.status(500).json({
      status: "fail",
      message : "Not Found Query",
    });
  }
};

module.exports = { filterProduct };
