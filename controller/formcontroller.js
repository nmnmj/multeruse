import applicantModel from "../models/applicant.js";

class formcontroller {
  static home = async (req, res) => {
    var r = 0;
    const all = await applicantModel.find();
    // console.log(all)
    // res.render("home.ejs", { r, all });
    res.send({r, all});
  };

  static saveProfile = async (req, res) => {
    const { name, email } = req.body;
    const pimage = req.files["pimage"][0].filename;
    const rdoc = req.files["rdoc"][0].filename;
    let r = "";
    if (name && email && pimage && rdoc) {
      const doc = new applicantModel({
        name,
        email,
        pimage,
        rdoc,
      });
      r = await doc.save();
      // console.log(r)
    }
    // r=r.name
    // console.log(req.files)
    // console.log(req.body)
    const all = await applicantModel.find();
    // res.render("home.ejs", { r, all });
    res.send({r, all});
  };
}

export default formcontroller;
