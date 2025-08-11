import { mixParams } from "../../utils/formatData.utils.js";
import { professor_userSchema } from "../professor_user.schema.js";

const professor_save = async (req, res, next) => {
  try {
    const data = mixParams(req);
    const result = professor_userSchema.safeParse(data);
    if (!result.success) return res.json(({error: result.error.issues,code:400})).status(400);
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message, code: 500 });
  }
};

export const userValidator = {
  professor_save
};
