export const px2vw = (px: number) => {
  const baseSize = 1600

  return `${(px / baseSize) * 100}vw`
}
