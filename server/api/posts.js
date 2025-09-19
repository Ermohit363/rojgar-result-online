// export default defineEventHandler(async () => {
//   const fileId = "15YDaBBZnDQHHoiGDM1hFvf3W8MBXEvFC"
//   const url = `https://drive.google.com/uc?export=download&id=${fileId}`
//   const res = await $fetch(url)   // server-side fetch (no CORS issue)
//   return res
// })

export default defineEventHandler(async () => {
  // Replace YOUR_DRIVE_FILE_ID with actual Google Drive file ID
  const url = 'https://drive.google.com/uc?export=download&id=15YDaBBZnDQHHoiGDM1hFvf3W8MBXEvFC'
  
  const res = await $fetch(url)
  return res
})

