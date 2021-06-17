import { Directus } from '@directus/sdk'

export default async ({ $config: { apiUrl, apiKey } }, inject) => {
  const directus = new Directus(apiUrl)

  await directus.auth.static(apiKey)
  inject('directus', directus)
}
