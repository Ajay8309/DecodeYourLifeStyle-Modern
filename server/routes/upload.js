import express from 'express';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';
import crypto from 'crypto';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Create storage engine
const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads' // Collection name
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });

// @route POST /api/upload
// @desc  Uploads file to DB
router.post('/', upload.single('image'), (req, res) => {
    // res.json({ file: req.file });
    const fileUrl = `http://localhost:${process.env.PORT}/api/upload/image/${req.file.filename}`;
    res.json(fileUrl);
});

// @route GET /api/upload/image/:filename
// @desc Display Image
router.get('/image/:filename', async (req, res) => {
    try {
        const conn = mongoose.connection;
        const gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
            bucketName: 'uploads'
        });

        const files = await gridFSBucket.find({ filename: req.params.filename }).toArray();

        if (!files || files.length === 0) {
            return res.status(404).json({ err: 'No file exists' });
        }

        const file = files[0];

        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' || file.contentType === 'image/gif' || file.contentType === 'image/webp') {
            const readstream = gridFSBucket.openDownloadStreamByName(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({ err: 'Not an image' });
        }
    } catch (error) {
        console.error("GridFS Error:", error);
        res.status(500).json({ err: 'Server Error' });
    }
});

export default router;
