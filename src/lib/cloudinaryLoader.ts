export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`].join(',');
  return `https://res.cloudinary.com/dba9e4lqq/image/upload/${params}${src}`;
}