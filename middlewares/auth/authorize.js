const authorize = (arrType) => (req, res, next) => {
  const { user } = req;
  // console.log(user);
  if (user) {
    const checkType = arrType.findIndex((item) => item === user.type_user);
    if (checkType !== -1) {
      next();
    } else {
      return res.status(500).json({
        errCode: 1,
        status: "fail",
        message: "Bạn không có quyền truy cập",
      });
    }
  } else {
    return res.status(500).json({
      errCode: 1,
      status: "fail",
      message: "Bạn chưa đăng nhập",
    });
  }
};

module.exports = { authorize };
