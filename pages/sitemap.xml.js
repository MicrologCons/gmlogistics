const BASE_URL = "https://microlog.tech";

function generateSiteMap(solutions, products) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://microlog.tech</loc>
     </url>
  
    
   
    
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(
    `https://api.microlog.tech/api/solutions?populate=*`
  );

  const req = await fetch(`https://api.microlog.tech/api/products?populate=*`);
  const solutions = await request.json();
  const products = await req.json();

  // We generate the XML sitemap with the bookings data
  const sitemap = generateSiteMap(solutions, products);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: { solutions, products },
  };
}

export default SiteMap;
