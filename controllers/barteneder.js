
const express = require('express')


const BartenderApi = require('../models/bartender.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const BartenderRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
BartenderRouter.get('/', (req, res) => {
  res.send(BartenderApi.getAllBartenders())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  BartenderRouter
}
