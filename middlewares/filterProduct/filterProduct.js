const { Products, ProductsDetails, sequelize } = require("../../models");
const { Op } = require("sequelize");

const filterProduct = async (req, res, next) => {
  const params = req.query;
  const checkPrice = Object.keys(params).length === 0;
  // console.log(params);
  let resultHandle = [];
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
      resultHandle.push({ [Op.or]: resOptionPrice });
      // req.rangePrice = resOptionPrice;
    }

    // sort = 'ban-chay-nhat' thi where sold > 10 va order : [] , if sort desc , asc order : [['price', sort]]

    if (params.sort == "ban-chay-nhat") {
      resultHandle.push({
        [Op.or]: [
          {
            sold: {
              [Op.gt]: 10,
            },
          },
        ],
      });
    } else if (params.sort == "asc" || params.sort == "desc") {
      req.sortPice = [["price", `${params.sort}`]];
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
      resultHandle.push({ [Op.or]: resBrand });
      // req.rangeBrand = resBrand;
      // console.log(resBrand);
    }
    // pagination
    if (params["trang"] || params.limit) {
      // can get product without page
      // can't get product without limit
      // get product with limit and page -> pagination
      const limit = params.limit * 1 || 10;
      const pagination = params["trang"] * 1 || null;
      const skip = pagination ? pagination * limit - limit : null;
      // console.log(limit,pagination,skip);
      req.page = { skip, limit };
    } else {
      req.page = { skip: null, limit: null };
    }
  }
  req.resultHandle = resultHandle;
  next();
  // if(params["muc-gia"] || params.sort || params["hang-san-xuat"] || params["trang"] || params.limit) {
  // }else{
  //   res.status(500).json({
  //     status: "fail",
  //     message : "Not Found Query",
  //   });
  // }
};

module.exports = { filterProduct };
