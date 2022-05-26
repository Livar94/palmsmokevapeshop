import dbConnect from '../../lib/dbConnect'
import Product from '../../models/Product'
import Category from '../../models/Category'

export default async function handler (req, res) {
  const cloudinary = require('cloudinary');

  cloudinary.config({ 
    cloud_name: 'al-haddad', 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });

  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const categoryId = req.body.categoryId;
        return cloudinary.v2.uploader.upload(req.body.image, 
        async (error, result) => {
          if (error) {
            return res.status(500).json({ success: false, data: error })
          } else {
            const product = new Product({...req.body, image: result?.url });
            const category = await Category.update({
                _id: categoryId }, 
                { $push: { products: product } }
            )
            return res.status(201).json({ success: true, data: category })
          }
        });

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}