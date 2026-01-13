export const existsByParam = (Model, param = 'id', message = 'Resource not found') => {
    return async (req, res, next) => {
        const value = req.params[param];
        const resource = await Model.findByPk(value);
        if (!resource) {
            return res.status(404).json({
                errors: [{ message }]
            });
        }
        req.resource = resource;
        next();
    };
};
