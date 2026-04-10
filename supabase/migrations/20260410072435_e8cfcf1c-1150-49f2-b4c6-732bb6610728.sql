
-- Add image_url column to news table
ALTER TABLE public.news ADD COLUMN image_url text;

-- Create storage bucket for news images
INSERT INTO storage.buckets (id, name, public) VALUES ('news-images', 'news-images', true);

-- Anyone can view news images
CREATE POLICY "Anyone can view news images"
ON storage.objects FOR SELECT
USING (bucket_id = 'news-images');

-- Authenticated users can upload news images
CREATE POLICY "Authenticated users can upload news images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'news-images');

-- Authenticated users can delete their own news images
CREATE POLICY "Authenticated users can delete news images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'news-images');
