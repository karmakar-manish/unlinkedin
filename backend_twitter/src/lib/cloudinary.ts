import { v2 as cloudinary } from "cloudinary";

// You can pass env bindings here from Hono context
export function configureCloudinary(c: any) {
  cloudinary.config({
    cloud_name: c.env.CLOUDINARY_CLOUD_NAME,
    api_key: c.env.CLOUDINARY_API_KEY,
    api_secret: c.env.CLOUDINARY_API_SECRET,
  });

  return cloudinary;
}
