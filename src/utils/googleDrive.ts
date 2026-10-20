export function getGoogleDriveEmbedUrl(url: string): string | null {
  const match = url.match(/drive\.google\.com\/(?:file\/d\/([\w-]+)|open\?id=([\w-]+))/);
  const fileId = match?.[1] ?? match?.[2];
  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
}
