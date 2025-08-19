export const mixParams = (req) => {
    let data = {}
    const { params, query, body, file, headers } = req
    if (params) data = { ...data, ...params }
    if (file) data = { ...data, file }
    if (query) data = { ...data, ...query }
    if (body) data = { ...data, ...body }
    if(headers) data = { ...data, headers}
    return data;
}
