import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../utils/dbConnect';
import Volunteer from '../../models/Volunteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const volunteer = await Volunteer.create(req.body);
      res.status(201).json({ success: true, data: volunteer });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  } else if (req.method === 'GET') {
    // Admin: Get all volunteers (add simple token check)
    if (req.headers.authorization !== `Bearer ${process.env.ADMIN_TOKEN}`) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: volunteers });
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}