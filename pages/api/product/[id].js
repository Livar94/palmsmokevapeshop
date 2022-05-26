import dbConnect from '../../../lib/dbConnect'
import Product from '../../../models/Product'
import Category from '../../../models/Category'
var ObjectId = require('mongoose').Types.ObjectId;

export default async function handler (req, res) {
  const { method, query, body } = req

  await dbConnect()

  switch (method) {
    case 'DELETE':
      try {
        const category = await Category.update(
          { "_id": body.categoryId }, 
          { "$pull": { "products": {"_id": new ObjectId(query?.id)} } },
        )
        console.log(Category)
        res.status(200).json({ success: true, data: category })
      } catch (error) {
        res.status(400).json({ success: false, data: error })
      }
      break
    case 'GET':
      try {
        const category = await Category.findById(query?.id)
        res.status(200).json({ success: true, data: category })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}