import type { Metadata } from 'next'

import { PageContent } from './page-content'

export const metadata: Metadata = {
  title: 'Isadora For You',
  description: 'Isadora page...',
}

export default function IsadoraFYPage() {
  return <PageContent />
}
