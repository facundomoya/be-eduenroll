import { mixParams } from "../../utils/formatData.utils.js";
import { degree_userSchema } from "../degree_user.schema.js";

const degree_save = async (req, res, next) => {
  try {
    const data = mixParams(req);
    const result = degree_userSchema.safeParse(data);
    if (!result.success) return res.json(({error: result.error.issues,code:400})).status(400);
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message, code: 500 });
  }
}

export const userValidator = {
  degree_save
};
