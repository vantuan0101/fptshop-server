const { Catelogies, sequelize } = require("../models");

const getCatelogyDetails = async (req, res) => {
  try {
    const [result] = await sequelize.query(
      `
      select Catelogies.name , CatelogyProperties.name as title, CatelogyProperties.details as details from  Catelogies
      left join CatelogyProperties
      on Catelogies.id = CatelogyProperties.catelogies_id
      order by 
      Catelogies.id ASC ,
      CatelogyProperties.id ASC
      `
    );

    const listCatelogies = result.reduce((res, e, i) => {
      let properties = [];
      if (res?.findIndex((item) => item?.name === e.name) == -1) {
        properties = [...properties, { title: e.title, details: e.details?.split(',') }];
        const catelogy = {
          name: e.name,
          properties,
        };
        res = [...res, catelogy];
      } else {
        res = res?.map((item) =>
          item.name === e.name
            ? {
                ...item,
                properties: [
                  ...item.properties,
                  { title: e?.title, details: e.details?.split(',') },
                ],
              }
            : item
        );
      }
      return res;
    }, []);

    res.status(200).json({
      status: "success",
      data: listCatelogies,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const createCatelogy = async (req, res) => {
  const catelogy = req.body;
  try {
    const newCatelogy = await Catelogies.create(catelogy);
    await newCatelogy.save();
    res.status(201).json({
      status: "success",
      data: newCatelogy,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  createCatelogy,
  getCatelogyDetails,
};
