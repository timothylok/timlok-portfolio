import { MetadataRoute } from 'next'
import { caseStudies } from './data/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://timlok-portfolio.vercel.app'
  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${base}/CaseStudies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: base,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cv`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/CaseStudies`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    ...caseStudyUrls,
  ]
}
