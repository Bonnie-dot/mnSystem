const middleware = {}

middleware['formateDate'] = require('../middleware/formateDate.js')
middleware['formateDate'] = middleware['formateDate'].default || middleware['formateDate']

export default middleware
