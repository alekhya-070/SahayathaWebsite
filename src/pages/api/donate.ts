import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import Donation from '../../models/Donation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const donation = await Donation.create(req.body);
      res.status(201).json({ success: true, data: donation });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else if (req.method === 'GET') {
    // Admin: Get all donations (add simple token check)
    if (req.headers.authorization !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: donations });
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}