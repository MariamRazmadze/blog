export const getPlainExcerpt = (html: string, maxLength: number) => {
  const plainText = html
    .replace(/<[^>]*>/g, " ") // strip tags, keep a space so words don't merge
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ") // collapse repeated whitespace
    .trim();

  return plainText.length > maxLength
    ? plainText.slice(0, maxLength) + "..."
    : plainText;
};
