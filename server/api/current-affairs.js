// export default defineEventHandler(async () => {
//     const fileId = '15vPIJtfeFP2ABLH7B7CZIngqYMfAKGek'
//     const url = `https://drive.google.com/uc?export=download&id=${fileId}`
//     return await $fetch(url)
// })
export default defineEventHandler(async () => {
  const url = 'https://drive.google.com/uc?export=download&id=15vPIJtfeFP2ABLH7B7CZIngqYMfAKGek'
  
  const res = await $fetch(url)
  return res
})
