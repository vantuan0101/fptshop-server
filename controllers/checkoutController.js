const { sendMail } = require("../Utils/mailer");
const { convert } = require("html-to-text");
const checkoutProduct = async (req, res) => {
  const { fullName, phone, email, address } = req.body.data;
  const carts = req.body.carts;
  console.log(carts);
  // console.log(req.body);
  const dataProduct = carts.reduce((acc, cur) => {
    acc.push(` <div>
  <p>Sản phẩm :${cur.name} </p>
  <p>Giá : ${cur.price}</p>
  <p>Giảm : ${cur.discountValue}</p>
  <p>Số lượng : ${cur.quantity}</p>
  <p>Tổng tiền : ${(cur.price - cur.discountValue) * cur.quantity}</p>
  </div>`);
    return acc;
  }, []);
  try {
    const html = `<h1>${fullName} , your order is successfull</h1>
    <p>Chúng tôi cảm ơn bạn vì đã đặt hàng.</p>
    <h3>Thông tin đơn hàng</h3>
    ${dataProduct.join("")}
    <h3>Thông tin khách hàng</h3>
    <div>
    <p>Họ tên : ${fullName}</p>
    <p>Số điện thoại : ${phone}</p>
    <p>Email : ${email}</p>
    <p>Địa chỉ : ${address}</p>
    </div>
    <p>Cảm ơn bạn đã tin tưởng và ủng hộ chúng tôi</p>
    `;
    const text = convert(html, {
      wordwrap: 130,
    });

    await sendMail(email, "Thanks for your order", text);
    res.status(200).json({
      errCode: 0,
      status: "Success",
    });
  } catch (error) {
    res.status(500).json({
      errCode: 1,
      status: "fail",
      message: error,
    });
  }
};

module.exports = { checkoutProduct };
