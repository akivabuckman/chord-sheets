function getGoogleDriveFileId(url: string): string | null {
  const match = url.match(/drive\.google\.com\/(?:file\/d\/([\w-]+)|open\?id=([\w-]+))/);
  return match?.[1] ?? match?.[2] ?? null;
}

export function getGoogleDriveEmbedUrl(url: string): string | null {
  const fileId = getGoogleDriveFileId(url);
  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
}

export function getGoogleDriveVideoUrl(url: string): string | null {
  const fileId = getGoogleDriveFileId(url);
  return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : null;
}
