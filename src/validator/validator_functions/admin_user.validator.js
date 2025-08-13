import { mixParams } from "../../utils/formatData.utils.js";
import { admin_userSchema } from "../admin_user.schema.js";

const admin_save = async (req, res, next) => {
  try {
    const data = mixParams(req);
    const result = admin_userSchema.safeParse(data);
    if (!result.success) return res.json(({error: result.error.issues,code:400})).status(400);
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message, code: 500 });
  }
};

export const adminValidator = {
  admin_save
};
