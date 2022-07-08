// 数组累计求和
export const getArrSum = arr => arr.reduce(
    (sum, val) => sum += val, 0)