export function getInstagramPermalink(url: string): string | null {
  const match = url.match(/instagram\.com\/(reel|p|tv)\/([\w-]+)/);
  return match ? `https://www.instagram.com/${match[1]}/${match[2]}/` : null;
}
