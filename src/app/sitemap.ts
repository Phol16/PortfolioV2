export default async function sitemap(){
  const route = ['','/aboutPage'].map((route)=>({
    url:`https://phol.vercel.app/${route}`,
    lastModified:new Date().toISOString()
}))

return [...route]
}