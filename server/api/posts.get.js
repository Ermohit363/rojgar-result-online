import fetch from 'node-fetch'

export default defineEventHandler(async () => {
  const FILE_ID = '15YDaBBZnDQHHoiGDM1hFvf3W8MBXEvFC' // replace with your Google Drive file ID
  const URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`

  const res = await fetch(URL)
  if (!res.ok) throw new Error('Failed to fetch posts JSON')
  const data = await res.json()
  return data
})
